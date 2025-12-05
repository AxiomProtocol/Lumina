import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/lib/authContext";
import { apiRequest } from "@/lib/queryClient";
import { 
  Bug, 
  Lightbulb, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Target,
  Users,
  Rocket,
  Mail,
  AlertTriangle
} from "lucide-react";
import v1BannerImage from "@assets/file_00000000ae8871fd81e30d259983126c_1764973248015.png";

const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  type: z.enum(["bug", "suggestion", "general"]),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Please provide more details (at least 20 characters)"),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

export default function Feedback() {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { data: feedbackCount } = useQuery<{ count: number }>({
    queryKey: ["/api/feedback/count"],
  });

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: user?.displayName || user?.username || "",
      email: user?.email || "",
      type: "general",
      subject: "",
      message: "",
    },
  });

  const submitFeedback = useMutation({
    mutationFn: async (data: FeedbackFormData) => {
      const response = await apiRequest("POST", "/api/feedback", {
        ...data,
        userId: user?.id || null,
        userAgent: navigator.userAgent,
      });
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Feedback Submitted",
        description: "Thank you for helping us improve Lumina!",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FeedbackFormData) => {
    submitFeedback.mutate(data);
  };

  const handleSubmitAnother = () => {
    form.reset({
      name: user?.displayName || user?.username || "",
      email: user?.email || "",
      type: "general",
      subject: "",
      message: "",
    }, { keepValues: false });
    setIsSubmitted(false);
  };

  const progressToV2 = feedbackCount ? Math.min((feedbackCount.count / 100) * 100, 100) : 0;
  const reportsRemaining = feedbackCount ? Math.max(100 - feedbackCount.count, 0) : 100;

  const feedbackTypes = [
    { value: "bug", label: "Bug Report", icon: Bug, color: "text-red-500" },
    { value: "suggestion", label: "Suggestion", icon: Lightbulb, color: "text-yellow-500" },
    { value: "general", label: "General Feedback", icon: MessageSquare, color: "text-blue-500" },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12 max-w-2xl">
          <Card className="text-center">
            <CardContent className="pt-12 pb-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="text-muted-foreground mb-6">
                Your feedback has been submitted successfully. We appreciate you helping us make Lumina better!
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Our team will review your submission and may reach out to you at the email provided.
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={handleSubmitAnother} variant="outline" data-testid="button-submit-another">
                  Submit Another Report
                </Button>
                <Button onClick={() => window.location.href = "/"} data-testid="button-go-home">
                  Return Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* V1 Banner Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-background to-primary/5">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Beta Version
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Lumina V1</span>
                </h1>
                <p className="text-muted-foreground mb-4">
                  You're experiencing the first version of Lumina! This is an early release, and we need your help to make it perfect.
                </p>
                <p className="text-sm text-muted-foreground">
                  Found a bug? Have a suggestion? Let us know! V2 will be released after we collect feedback from <strong className="text-foreground">100 beta testers</strong>.
                </p>
              </div>
              <div className="hidden md:block">
                <img 
                  src={v1BannerImage} 
                  alt="Lumina V1 - New Web3 Social Network" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Progress to V2 */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Progress to V2 Launch</CardTitle>
                </div>
                <Badge variant="outline" className="gap-1">
                  <Users className="w-3 h-3" />
                  {feedbackCount?.count || 0} / 100 Reports
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={progressToV2} className="h-3 mb-3" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  {reportsRemaining > 0 
                    ? `${reportsRemaining} more reports needed for V2 release`
                    : "V2 launch threshold reached!"
                  }
                </span>
                <span className="flex items-center gap-1">
                  <Rocket className="w-4 h-4" />
                  {Math.round(progressToV2)}%
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feedback Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Submit Feedback
              </CardTitle>
              <CardDescription>
                Help us improve Lumina by reporting bugs or sharing your suggestions. All feedback is sent to{" "}
                <a href="mailto:support@joinlumina.io" className="text-primary hover:underline">
                  support@joinlumina.io
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feedback Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {feedbackTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                <div className="flex items-center gap-2">
                                  <type.icon className={`w-4 h-4 ${type.color}`} />
                                  {type.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Brief description of your feedback" 
                            {...field} 
                            data-testid="input-subject"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide as much detail as possible. For bugs, include steps to reproduce the issue."
                            className="min-h-[150px] resize-y"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full gap-2" 
                    disabled={submitFeedback.isPending}
                    data-testid="button-submit-feedback"
                  >
                    {submitFeedback.isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Feedback
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="mt-6">
            <CardContent className="pt-6">
              <div className="text-center text-sm text-muted-foreground">
                <p className="mb-2">
                  You can also reach us directly at{" "}
                  <a href="mailto:support@joinlumina.io" className="text-primary hover:underline font-medium">
                    support@joinlumina.io
                  </a>
                </p>
                <p>
                  We read every submission and appreciate your help in making Lumina better!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
