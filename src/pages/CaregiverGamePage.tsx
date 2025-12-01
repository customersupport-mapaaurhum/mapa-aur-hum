import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeedbackDialog } from "@/components/FeedbackDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Baby, Trophy, Share2, RotateCcw } from "lucide-react";
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
  };

  const getResultMessage = () => {
    if (scorePercentage >= 80) {
      return {
        title: "🎉 Outstanding Detective Work!",
        message: "Congratulations! Your caregiver is providing excellent care in your absence. You've done a fantastic job instructing them!",
        color: "text-green-600"
      };
    } else if (scorePercentage >= 60) {
      return {
        title: "👍 Good Progress!",
        message: "Great start! There are a few more practices you can discuss with your caregiver to ensure comprehensive care.",
        color: "text-blue-600"
      };
    } else {
      return {
        title: "📚 Time to Coach Better!",
        message: "It looks like there's room for improvement. Please spend more time instructing your caregiver on these essential childcare practices.",
        color: "text-orange-600"
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <Baby className="w-24 h-24 text-primary" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Caregiver Detective Game
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be a detective! Check off all the childcare practices your caregiver (maid, babysitter, daycares, relatives) is doing while you're away. Let's see how well you've coached them! 🕵️
          </p>
        </motion.div>

        {!selectedAge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto"
          >
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Baby className="w-6 h-6" />
                  Select Your Child's Age
                </CardTitle>
                <CardDescription>
                  Choose your child's age in months to start the game
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select onValueChange={setSelectedAge} value={selectedAge}>
                  <SelectTrigger className="w-full">
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
              <Card className="shadow-elegant mb-6">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl">
                      Detective Checklist
                      <span className="text-sm font-normal text-muted-foreground ml-2">
                        (Age: {selectedAge} months)
                      </span>
                    </CardTitle>
                    <Button variant="outline" size="sm" onClick={handleReset}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Start Over
                    </Button>
                  </div>
                  <CardDescription>
                    Check all the practices your caregiver is doing correctly
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

                  <div className="pt-6 flex justify-between items-center border-t">
                    <div className="text-lg font-semibold">
                      Score: {score} / {totalItems}
                    </div>
                    <Button
                      onClick={handleSubmit}
                      size="lg"
                      disabled={score === 0}
                      className="gap-2"
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
              <Card className="shadow-elegant border-2 border-primary/20">
                <CardHeader className="text-center pb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 1 }}
                    className="flex justify-center mb-4"
                  >
                    <Trophy className="w-20 h-20 text-primary" />
                  </motion.div>
                  <CardTitle className={`text-3xl mb-3 ${getResultMessage().color}`}>
                    {getResultMessage().title}
                  </CardTitle>
                  <div className="text-6xl font-bold text-primary mb-4">
                    {score} / {totalItems}
                  </div>
                  <CardDescription className="text-lg">
                    {getResultMessage().message}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
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
                      className="flex-1 gap-2"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Play Again
                    </Button>
                    <Button
                      onClick={() => window.location.href = "/"}
                      size="lg"
                      className="flex-1"
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
  );
};

export default CaregiverGamePage;
