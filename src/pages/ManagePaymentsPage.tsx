import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  LogOut, 
  RefreshCw, 
  ImageIcon, 
  Search,
  Calendar,
  User,
  Mail,
  Phone,
  CreditCard,
  Clock
} from "lucide-react";
import { format, addDays } from "date-fns";

interface PremiumRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  utr: string;
  screenshot_url: string | null;
  status: string;
  created_at: string;
}

const ManagePaymentsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [requests, setRequests] = useState<PremiumRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<PremiumRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    type: "approve" | "reject";
    request: PremiumRequest | null;
  }>({ open: false, type: "approve", request: null });
  const [premiumDays, setPremiumDays] = useState(30);

  // Check admin access
  useEffect(() => {
    const checkAdminAccess = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/manage/auth");
        return;
      }

      const { data: roles, error } = await (supabase
        .from("user_roles") as any)
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .single();

      if (error || !roles) {
        await supabase.auth.signOut();
        navigate("/manage/auth");
        return;
      }

      setIsAdmin(true);
      fetchRequests();
    };

    checkAdminAccess();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        navigate("/manage/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchRequests = async () => {
    setIsLoading(true);
    try {
      let query = (supabase
        .from("premium_requests") as any)
        .select("*")
        .order("created_at", { ascending: false });

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setRequests(data || []);
      setFilteredRequests(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch requests",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchRequests();
    }
  }, [statusFilter, isAdmin]);

  // Search filter
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredRequests(requests);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = requests.filter(
      (r) =>
        r.name.toLowerCase().includes(query) ||
        r.email.toLowerCase().includes(query) ||
        r.phone.includes(query) ||
        r.utr.toLowerCase().includes(query)
    );
    setFilteredRequests(filtered);
  }, [searchQuery, requests]);

  const handleApprove = async () => {
    if (!confirmDialog.request) return;
    
    const request = confirmDialog.request;
    setProcessingId(request.id);
    setConfirmDialog({ open: false, type: "approve", request: null });

    try {
      const { error: updateError } = await (supabase
        .from("premium_requests") as any)
        .update({ status: "approved" })
        .eq("id", request.id);

      if (updateError) throw updateError;

      const premiumExpiry = format(addDays(new Date(), premiumDays), "yyyy-MM-dd");
      
      const { error: upsertError } = await (supabase
        .from("premium_users") as any)
        .upsert(
          {
            email: request.email.toLowerCase(),
            name: request.name,
            phone: request.phone,
            is_premium: true,
            premium_expiry: premiumExpiry,
          },
          { onConflict: "email" }
        );

      if (upsertError) throw upsertError;

      toast({
        title: "Approved",
        description: `Premium activated for ${request.email} (${premiumDays} days)`,
      });

      fetchRequests();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to approve",
        variant: "destructive",
      });
    } finally {
      setProcessingId(null);
      setPremiumDays(30);
    }
  };

  const handleReject = async () => {
    if (!confirmDialog.request) return;
    
    const request = confirmDialog.request;
    setProcessingId(request.id);
    setConfirmDialog({ open: false, type: "reject", request: null });

    try {
      const { error } = await (supabase
        .from("premium_requests") as any)
        .update({ status: "rejected" })
        .eq("id", request.id);

      if (error) throw error;

      toast({
        title: "Rejected",
        description: `Request from ${request.email} rejected`,
      });

      fetchRequests();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to reject",
        variant: "destructive",
      });
    } finally {
      setProcessingId(null);
    }
  };

  const viewScreenshot = async (fileName: string) => {
    try {
      const { data } = await supabase.storage
        .from("payment-screenshots")
        .createSignedUrl(fileName, 300);

      if (data?.signedUrl) {
        setSelectedScreenshot(data.signedUrl);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load screenshot",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/manage/auth");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">Pending</Badge>;
      case "approved":
        return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const statusCounts = {
    pending: requests.filter((r) => r.status === "pending").length,
    approved: requests.filter((r) => r.status === "approved").length,
    rejected: requests.filter((r) => r.status === "rejected").length,
    all: requests.length,
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="w-8 h-8 border-4 border-slate-600 border-t-slate-400 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Helmet>
        <title>Payment Management</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-slate-100">Payment Management</h1>
            <p className="text-sm text-slate-500">Review and approve premium requests</p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={fetchRequests} 
              disabled={isLoading}
              className="border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="text-slate-400 hover:text-slate-100 hover:bg-slate-800"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { key: "pending", label: "Pending", color: "amber" },
            { key: "approved", label: "Approved", color: "emerald" },
            { key: "rejected", label: "Rejected", color: "red" },
            { key: "all", label: "Total", color: "slate" },
          ].map(({ key, label, color }) => (
            <button
              key={key}
              onClick={() => setStatusFilter(key)}
              className={`p-4 rounded-lg border transition-all ${
                statusFilter === key
                  ? `bg-${color}-500/20 border-${color}-500/50`
                  : "bg-slate-900 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="text-2xl font-bold text-slate-100">
                {statusCounts[key as keyof typeof statusCounts]}
              </div>
              <div className="text-sm text-slate-500">{label}</div>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input
            placeholder="Search by name, email, phone, or UTR..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-900 border-slate-800 text-slate-100 placeholder:text-slate-500"
          />
        </div>

        {/* Table */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-slate-600 border-t-slate-400 rounded-full animate-spin" />
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            {searchQuery ? "No matching requests found" : `No ${statusFilter !== "all" ? statusFilter : ""} requests`}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-800 hover:bg-slate-800/50">
                    <TableHead className="text-slate-400">Date</TableHead>
                    <TableHead className="text-slate-400">User Details</TableHead>
                    <TableHead className="text-slate-400">UTR</TableHead>
                    <TableHead className="text-slate-400">Screenshot</TableHead>
                    <TableHead className="text-slate-400">Status</TableHead>
                    <TableHead className="text-slate-400">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequests.map((request) => (
                    <TableRow key={request.id} className="border-slate-800 hover:bg-slate-800/30">
                      <TableCell className="whitespace-nowrap">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <div>
                            <div>{format(new Date(request.created_at), "dd MMM yyyy")}</div>
                            <div className="text-xs text-slate-500">
                              {format(new Date(request.created_at), "HH:mm")}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-slate-100 font-medium">
                            <User className="w-3.5 h-3.5 text-slate-500" />
                            {request.name}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Mail className="w-3.5 h-3.5 text-slate-500" />
                            {request.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Phone className="w-3.5 h-3.5 text-slate-500" />
                            {request.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-slate-500" />
                          <code className="text-sm text-slate-300 bg-slate-800 px-2 py-1 rounded">
                            {request.utr}
                          </code>
                        </div>
                      </TableCell>
                      <TableCell>
                        {request.screenshot_url ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => viewScreenshot(request.screenshot_url!)}
                            className="text-slate-400 hover:text-slate-100"
                          >
                            <ImageIcon className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        ) : (
                          <span className="text-slate-600 text-sm">No file</span>
                        )}
                      </TableCell>
                      <TableCell>{getStatusBadge(request.status)}</TableCell>
                      <TableCell>
                        {request.status === "pending" && (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-emerald-600 hover:bg-emerald-500 text-white"
                              onClick={() => setConfirmDialog({ open: true, type: "approve", request })}
                              disabled={processingId === request.id}
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                              onClick={() => setConfirmDialog({ open: true, type: "reject", request })}
                              disabled={processingId === request.id}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </main>

      {/* Screenshot Dialog */}
      <Dialog open={!!selectedScreenshot} onOpenChange={() => setSelectedScreenshot(null)}>
        <DialogContent className="max-w-3xl bg-slate-900 border-slate-800">
          <DialogHeader>
            <DialogTitle className="text-slate-100">Payment Screenshot</DialogTitle>
          </DialogHeader>
          {selectedScreenshot && (
            <img
              src={selectedScreenshot}
              alt="Payment Screenshot"
              className="w-full rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Confirm Dialog */}
      <Dialog open={confirmDialog.open} onOpenChange={(open) => !open && setConfirmDialog({ ...confirmDialog, open: false })}>
        <DialogContent className="bg-slate-900 border-slate-800">
          <DialogHeader>
            <DialogTitle className="text-slate-100">
              {confirmDialog.type === "approve" ? "Approve Request" : "Reject Request"}
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              {confirmDialog.type === "approve" 
                ? `Approve premium for ${confirmDialog.request?.email}?`
                : `Reject request from ${confirmDialog.request?.email}?`
              }
            </DialogDescription>
          </DialogHeader>
          
          {confirmDialog.type === "approve" && (
            <div className="py-4">
              <label className="text-sm text-slate-300 mb-2 block">
                Premium Duration (days)
              </label>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <Input
                  type="number"
                  value={premiumDays}
                  onChange={(e) => setPremiumDays(parseInt(e.target.value) || 30)}
                  min={1}
                  max={365}
                  className="w-24 bg-slate-800 border-slate-700 text-slate-100"
                />
                <span className="text-sm text-slate-500">
                  Expires: {format(addDays(new Date(), premiumDays), "dd MMM yyyy")}
                </span>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setConfirmDialog({ ...confirmDialog, open: false })}
              className="text-slate-400"
            >
              Cancel
            </Button>
            <Button
              onClick={confirmDialog.type === "approve" ? handleApprove : handleReject}
              className={confirmDialog.type === "approve" 
                ? "bg-emerald-600 hover:bg-emerald-500" 
                : "bg-red-600 hover:bg-red-500"
              }
            >
              {confirmDialog.type === "approve" ? "Approve" : "Reject"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManagePaymentsPage;
