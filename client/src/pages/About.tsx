import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart, Target, Sparkles } from "lucide-react";

interface PlatformBranding {
  name: string;
  logo: string | null;
  tagline: string;
  aboutUs: string | null;
  mission: string | null;
  introduction: string | null;
}

export default function About() {
  const { data: branding, isLoading } = useQuery<PlatformBranding>({
    queryKey: ["/api/platform/branding"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(160 84% 55%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            data-testid="text-about-title"
          >
            About {branding?.name || "Lumina"}
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-about-tagline">
            {branding?.tagline || "Web3 Social Hub"}
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-8">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        ) : (
          <div className="space-y-8">
            {branding?.introduction && (
              <Card data-testid="card-introduction">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Welcome to {branding?.name || "Lumina"}</h2>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap" data-testid="text-introduction">
                        {branding.introduction}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {branding?.aboutUs && (
              <Card data-testid="card-about-us">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap" data-testid="text-about-us">
                        {branding.aboutUs}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {branding?.mission && (
              <Card data-testid="card-mission">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-amber-500/10 text-amber-500 shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap" data-testid="text-mission">
                        {branding.mission}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {!branding?.introduction && !branding?.aboutUs && !branding?.mission && (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    Platform content is being set up. Check back soon!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
