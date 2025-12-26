import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeedbackDialog } from "@/components/FeedbackDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Baby, Trophy, Share2, RotateCcw, Download, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


// Coaching practices data organized by age in months
const coachingData = {
  "0-6": [
    "Always support the baby's head and neck when lifting or putting them down",
    "Respond to their sounds with a smile or a word—babies feel secure when you answer them",
    "Keep the baby on their back while sleeping",
    "Give supervised tummy-time every day to help build strong muscles",
    "Check the diaper every 2–3 hours",
    "Never prop a bottle; always hold the baby while feeding",
    "Burp the baby after every feed",
    "Keep the baby away from loud TV or phone screens",
    "Wash your hands before touching the baby or preparing their food/milk",
    "Never leave the baby alone on the bed, sofa, or changing table",
    "Talk to the baby while doing chores nearby",
    "Follow the parent's feeding schedule strictly",
    "Keep small objects, medicines, coins away from the baby's reach",
    "Check room temperature—baby shouldn't be too hot or too cold",
    "Play simple games like peek-a-boo to keep the baby engaged"
  ],
  "7": [
    "Supervise play and movement to avoid falls",
    "Offer safe age-appropriate toys and avoid small choking hazards",
    "Follow parents' feeding schedule exactly and record feeds",
    "Keep all feeding utensils clean and separate",
    "Always wash your hands before handling the baby",
    "Talk, sing and engage baby with gentle interaction",
    "Follow safe sleep positions as instructed by parents",
    "Avoid screen time; encourage real-world interaction",
    "Ensure baby is never left alone on beds or sofas",
    "Watch for teething signs; only use parent-approved soothing methods",
    "Maintain clean play area free of sharp objects",
    "Do not introduce any new foods without parent approval",
    "Keep baby away from sick people to reduce infection risk",
    "Ensure safe holding and support of neck/back when lifting",
    "Check diaper frequently and change immediately if wet/soiled"
  ],
  "8": [
    "Supervise play and movement to avoid falls",
    "Offer safe age-appropriate toys and avoid small choking hazards",
    "Follow parents' feeding schedule exactly and record feeds",
    "Keep all feeding utensils clean and separate",
    "Always wash your hands before handling the baby",
    "Talk, sing and engage baby with gentle interaction",
    "Follow safe sleep positions as instructed by parents",
    "Avoid screen time; encourage real-world interaction",
    "Ensure baby is never left alone on beds or sofas",
    "Watch for teething signs; only use parent-approved soothing methods",
    "Maintain clean play area free of sharp objects",
    "Do not introduce any new foods without parent approval",
    "Keep floors clean as baby may mouth objects",
    "Monitor for allergies when new foods are tried",
    "Always strap baby safely in high chair or stroller"
  ],
  "9": [
    "Supervise play and movement to avoid falls",
    "Offer safe age-appropriate toys and avoid small choking hazards",
    "Follow parents' feeding schedule exactly and record feeds",
    "Keep all feeding utensils clean and separate",
    "Always wash your hands before handling the baby",
    "Talk, sing and engage baby with gentle interaction",
    "Follow safe sleep positions as instructed by parents",
    "Avoid screen time; encourage real-world interaction",
    "Ensure baby is never left alone on beds or sofas",
    "Watch for teething signs; only use parent-approved soothing methods",
    "Give baby floor time to explore safely",
    "Encourage tummy time as per parent instructions",
    "Keep medicines and chemicals completely out of reach",
    "Burp baby after feedings to reduce gas discomfort",
    "Note baby's mood or unusual behavior for parent report"
  ],
  "10": [
    "Supervise play and movement to avoid falls",
    "Offer safe age-appropriate toys and avoid small choking hazards",
    "Follow parents' feeding schedule exactly and record feeds",
    "Keep all feeding utensils clean and separate",
    "Always wash your hands before handling the baby",
    "Talk, sing and engage baby with gentle interaction",
    "Follow safe sleep positions as instructed by parents",
    "Avoid screen time; encourage real-world interaction",
    "Ensure baby is never left alone on beds or sofas",
    "Watch for teething signs; only use parent-approved soothing methods",
    "Maintain clean play area free of sharp objects",
    "Keep floors clean as baby may mouth objects",
    "Help baby practice reaching and grasping safely",
    "Avoid perfumes or strong scents around the baby",
    "Never leave baby near water containers or buckets"
  ],
  "11": [
    "Supervise play and movement to avoid falls",
    "Offer safe age-appropriate toys and avoid small choking hazards",
    "Follow parents' feeding schedule exactly and record feeds",
    "Keep all feeding utensils clean and separate",
    "Always wash your hands before handling the baby",
    "Talk, sing and engage baby with gentle interaction",
    "Follow safe sleep positions as instructed by parents",
    "Avoid screen time; encourage real-world interaction",
    "Ensure baby is never left alone on beds or sofas",
    "Watch for teething signs; only use parent-approved soothing methods",
    "Maintain clean play area free of sharp objects",
    "Keep floors clean as baby may mouth objects",
    "Monitor for allergies when new foods are tried",
    "Ensure baby stays hydrated as per parent guidance",
    "Keep electrical outlets and cords covered and unreachable"
  ],
  "12": [
    "Supervise play and movement to avoid falls",
    "Offer safe age-appropriate toys and avoid small choking hazards",
    "Follow parents' feeding schedule exactly and record feeds",
    "Keep all feeding utensils clean and separate",
    "Always wash your hands before handling the baby",
    "Talk, sing and engage baby with gentle interaction",
    "Follow safe sleep positions as instructed by parents",
    "Avoid screen time; encourage real-world interaction",
    "Ensure baby is never left alone on beds or sofas",
    "Watch for teething signs; only use parent-approved soothing methods",
    "Do not introduce any new foods without parent approval",
    "Keep baby away from sick people to reduce infection risk",
    "Give baby floor time to explore safely",
    "Help baby practice reaching and grasping safely",
    "Keep medicines and chemicals completely out of reach"
  ]
};

const CaregiverGamePage = () => {
  const [showRules, setShowRules] = useState(true);
  const [selectedAge, setSelectedAge] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [showResults, setShowResults] = useState(false);
  const [showSocialMediaPrompt, setShowSocialMediaPrompt] = useState(false);

  const currentPractices = selectedAge ? coachingData[selectedAge as keyof typeof coachingData] || [] : [];
  const score = checkedItems.size;
  const totalItems = currentPractices.length;
  const scorePercentage = totalItems > 0 ? (score / totalItems) * 100 : 0;

  const handleCheckboxChange = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const handleSubmit = () => {
    setShowResults(true);
    if (scorePercentage >= 70) {
      setShowSocialMediaPrompt(true);
    }
  };

  const handleReset = () => {
    setCheckedItems(new Set());
    setShowResults(false);
    setShowSocialMediaPrompt(false);
    setSelectedAge("");
    setShowRules(true);
  };

  const getResultMessage = () => {
    if (scorePercentage >= 80) {
      return {
        title: "🎄 Outstanding Detective Work!",
        message: "Congratulations! Your caregiver is providing excellent care in your absence. You've done a fantastic job instructing them!",
        color: "text-green-600",
        showDownload: false
      };
    } else if (scorePercentage >= 60) {
      return {
        title: "🎁 Good Progress!",
        message: "Great start! There are a few more practices you can discuss with your caregiver to ensure comprehensive care.",
        color: "text-blue-600",
        showDownload: false
      };
    } else {
      return {
        title: "🎅 Time to Coach Better!",
        message: "It looks like there's room for improvement. Instruct your caregiver better!",
        color: "text-red-600",
        showDownload: true
      };
    }
  };

  return (
    <>
      <Helmet>
        <title>Caregiver Detective Game - MaPa-Aur-Hum | Check Your Childcare Quality</title>
        <meta name="description" content="Play the Caregiver Detective Game to assess your babysitter or maid's childcare practices. Get a score and coaching tips based on your child's age." />
        <meta property="og:title" content="Caregiver Detective Game - MaPa-Aur-Hum" />
        <meta property="og:description" content="Interactive game for parents to check childcare practices when they're away. Score your caregiver and get coaching tips." />
        <link rel="canonical" href="https://mapa-aur-hum.lovable.app/caregiver-game" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-red-50 via-green-50 to-red-50 dark:from-red-950/20 dark:via-green-950/20 dark:to-red-950/20 relative overflow-hidden">
      {/* Simplified decorative elements - CSS only, no JS animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-[10%] w-3 h-3 bg-red-300/20 rounded-full animate-pulse" />
        <div className="absolute top-20 right-[20%] w-2 h-2 bg-green-300/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-[30%] w-4 h-4 bg-red-300/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 right-[40%] w-2 h-2 bg-green-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <Header />
      
      <main className="container mx-auto px-4 py-4 pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 via-green-600 to-red-600 bg-clip-text text-transparent">
            🎄 Caregiver Detective Game 🎅
          </h1>
          <p className="text-sm text-foreground/80 max-w-2xl mx-auto">
            Check off all the childcare practices your caregiver (maid, babysitter, relatives) is doing while you're away. 🕵️
          </p>
        </motion.div>

        {showRules && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <Card className="shadow-elegant border-2 border-green-500 bg-gradient-to-br from-red-50/80 to-green-50/80 dark:from-red-950/40 dark:to-green-950/40">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-red-600">
                  🎁 Game Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <p className="text-base">Select your child's age in months to see age-appropriate childcare practices</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <p className="text-base">Check off all the practices your caregiver is currently doing</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <p className="text-base">Each checked practice earns you 1 point</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">4️⃣</span>
                  <p className="text-base">Get your score and a chance to feature as mapa-aur-hum champion</p>
                </div>
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700">
                  <p className="text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">Powered by AI</span>
                  </p>
                </div>
                <Button 
                  onClick={() => setShowRules(false)} 
                  className="w-full mt-4 bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700"
                  size="lg"
                >
                  Start Playing! 🎮
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {!selectedAge && !showRules && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto"
          >
            <Card className="shadow-elegant border-2 border-red-500 bg-gradient-to-br from-red-50 to-green-50 dark:from-red-950/40 dark:to-green-950/40">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-green-600">
                  <Baby className="w-6 h-6" />
                  🎄 Select Your Child's Age
                </CardTitle>
                <CardDescription>
                  Choose your child's age in months to start the game
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select onValueChange={setSelectedAge} value={selectedAge}>
                  <SelectTrigger className="w-full border-green-500">
                    <SelectValue placeholder="Select age..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-6">0-6 months</SelectItem>
                    <SelectItem value="7">7 months</SelectItem>
                    <SelectItem value="8">8 months</SelectItem>
                    <SelectItem value="9">9 months</SelectItem>
                    <SelectItem value="10">10 months</SelectItem>
                    <SelectItem value="11">11 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {selectedAge && !showResults && (
            <motion.div
              key="game"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="shadow-elegant mb-6 border-2 border-green-500 bg-gradient-to-br from-red-50/50 to-green-50/50 dark:from-red-950/20 dark:to-green-950/20">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl text-red-600">
                      🎅 Detective Checklist
                      <span className="text-sm font-normal text-muted-foreground ml-2">
                        (Age: {selectedAge} months)
                      </span>
                    </CardTitle>
                    <Button variant="outline" size="sm" onClick={handleReset} className="border-red-500 text-red-600 hover:bg-red-50">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Start Over
                    </Button>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-green-600" />
                    Check all the practices your caregiver is doing correctly • Powered by AI
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentPractices.map((practice, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3 p-4 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <Checkbox
                        id={`practice-${index}`}
                        checked={checkedItems.has(index)}
                        onCheckedChange={() => handleCheckboxChange(index)}
                        className="mt-1"
                      />
                      <Label
                        htmlFor={`practice-${index}`}
                        className="text-base cursor-pointer leading-relaxed"
                      >
                        {practice}
                      </Label>
                    </motion.div>
                  ))}

                  <div className="pt-6 flex justify-between items-center border-t border-green-200">
                    <div className="text-lg font-semibold text-green-700">
                      🎁 Score: {score} / {totalItems}
                    </div>
                    <Button
                      onClick={handleSubmit}
                      size="lg"
                      disabled={score === 0}
                      className="gap-2 bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700"
                    >
                      <Trophy className="w-5 h-5" />
                      See My Results
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {showResults && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="shadow-elegant border-2 border-red-500 bg-gradient-to-br from-red-50 to-green-50 dark:from-red-950/40 dark:to-green-950/40">
                <CardHeader className="text-center pb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 1 }}
                    className="flex justify-center mb-4"
                  >
                    <Trophy className="w-20 h-20 text-yellow-500" />
                  </motion.div>
                  <CardTitle className={`text-3xl mb-3 ${getResultMessage().color}`}>
                    {getResultMessage().title}
                  </CardTitle>
                  <div className="text-6xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent mb-4">
                    {score} / {totalItems}
                  </div>
                  <CardDescription className="text-lg">
                    {getResultMessage().message}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {getResultMessage().showDownload && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 bg-gradient-to-r from-red-100 to-green-100 dark:from-red-900/30 dark:to-green-900/30 rounded-lg border-2 border-red-300"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <Download className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-muted-foreground mb-4">
                            Download our app to instruct and collaborate better with your caregiver (maid, babysitter, relatives) for childcare. Earn reward points for better collaboration.
                          </p>
                          <Button 
                            onClick={() => window.location.href = "/#downloads"} 
                            className="w-full sm:w-auto gap-2 bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700"
                          >
                            <Download className="w-4 h-4" />
                            Download App Now
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {showSocialMediaPrompt && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/20"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <Share2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">
                            Congratulations on Your Achievement! 🎉
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            Your excellent score shows great dedication to your child's care! Would you like to be featured on our social media channels to inspire other parents?
                          </p>
                          <FeedbackDialog>
                            <Button className="w-full sm:w-auto gap-2">
                              <Share2 className="w-4 h-4" />
                              Yes, Feature My Achievement!
                            </Button>
                          </FeedbackDialog>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex gap-4">
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      size="lg"
                      className="flex-1 gap-2 border-red-500 text-red-600 hover:bg-red-50"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Play Again
                    </Button>
                    <Button
                      onClick={() => window.location.href = "/"}
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700"
                    >
                      Back to Home
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      </div>
    </>
  );
};

export default CaregiverGamePage;
