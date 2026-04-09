import { YouTubeFacade } from "@/components/YouTubeFacade";

export const AppTutorials = () => {
  return (
    <section id="tutorials" className="py-8 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            MaPa-Aur-Hum Tutorials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how to use MaPa-Aur-Hum with our step-by-step video guides
          </p>
        </div>

        {/* Welcome / Starter Video */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <YouTubeFacade
                videoId="tjDYjIpApyU"
                title="Welcome to MaPa-Aur-Hum – Get Started"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                🎉 Welcome – Get Started
              </h3>
              <p className="text-muted-foreground">
                New here? Watch this quick welcome video to get started with MaPa-Aur-Hum
              </p>
            </div>
          </div>
        </div>

        {/* Feature Videos */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-foreground">Feature Tutorials</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Parents Tutorial */}
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <YouTubeFacade
                videoId="Knc1ifxoyiQ"
                title="App Tutorial for Parents"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                For Parents
              </h3>
              <p className="text-muted-foreground">
                Complete guide for parents to get started with MaPa-Aur-Hum
              </p>
            </div>
          </div>

          {/* Caregivers Tutorial */}
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <YouTubeFacade
                videoId="i8XyMDcN6n0"
                title="App Tutorial for Caregivers (maids, babysitters, relatives)"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                For Caregivers (maids, babysitters, relatives)
              </h3>
              <p className="text-muted-foreground">
                Essential guide for caregivers (maids, babysitters, relatives) to effectively use the app
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
