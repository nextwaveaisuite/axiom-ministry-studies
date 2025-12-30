import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DiscussionForum from "@/components/DiscussionForum";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, Music, FileText, CheckCircle2, ArrowLeft, Download } from "lucide-react";
import jsPDF from "jspdf";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import type { ModuleData } from "@/data/moduleContent";

interface ModuleContentProps {
  pathway: string;
  pathwayTitle: string;
  moduleData: ModuleData;
}

export default function ModuleContent({ pathway, pathwayTitle, moduleData }: ModuleContentProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [watchedVideos, setWatchedVideos] = useState<{ [key: string]: boolean }>({});
  const [listenedAudio, setListenedAudio] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Load completion status
    const progressKey = "axiom-pathway-progress";
    const saved = localStorage.getItem(progressKey);
    if (saved) {
      try {
        const progress = JSON.parse(saved);
        setIsCompleted(progress[pathway]?.[moduleData.number] || false);
      } catch (e) {
        setIsCompleted(false);
      }
    }

    // Load video progress
    const videoKey = `axiom-videos-${pathway}-${moduleData.number}`;
    const savedVideos = localStorage.getItem(videoKey);
    if (savedVideos) {
      try {
        setWatchedVideos(JSON.parse(savedVideos));
      } catch (e) {
        setWatchedVideos({});
      }
    }

    // Load audio progress
    const audioKey = `axiom-audio-${pathway}-${moduleData.number}`;
    const savedAudio = localStorage.getItem(audioKey);
    if (savedAudio) {
      try {
        setListenedAudio(JSON.parse(savedAudio));
      } catch (e) {
        setListenedAudio({});
      }
    }
  }, [pathway, moduleData.number]);

  const toggleCompletion = () => {
    const progressKey = "axiom-pathway-progress";
    const saved = localStorage.getItem(progressKey);
    let progress: any = {};
    
    if (saved) {
      try {
        progress = JSON.parse(saved);
      } catch (e) {
        progress = {};
      }
    }

    if (!progress[pathway]) {
      progress[pathway] = {};
    }

    progress[pathway][moduleData.number] = !isCompleted;
    localStorage.setItem(progressKey, JSON.stringify(progress));
    setIsCompleted(!isCompleted);
  };

  const toggleVideoWatched = (videoKey: string) => {
    const newWatched = { ...watchedVideos, [videoKey]: !watchedVideos[videoKey] };
    setWatchedVideos(newWatched);
    const videoStorageKey = `axiom-videos-${pathway}-${moduleData.number}`;
    localStorage.setItem(videoStorageKey, JSON.stringify(newWatched));
  };

  const downloadStudyGuide = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPos = 20;

    // Title
    pdf.setFontSize(20);
    pdf.setFont("helvetica", "bold");
    pdf.text(moduleData.title, margin, yPos);
    yPos += 10;

    // Scripture
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "italic");
    const scriptureLines = pdf.splitTextToSize(`Scripture: ${moduleData.scripture}`, maxWidth);
    pdf.text(scriptureLines, margin, yPos);
    yPos += scriptureLines.length * 7 + 10;

    // Introduction
    pdf.setFont("helvetica", "normal");
    const introLines = pdf.splitTextToSize(moduleData.content.introduction, maxWidth);
    pdf.text(introLines, margin, yPos);
    yPos += introLines.length * 7 + 10;

    // Teaching Points
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Teaching", margin, yPos);
    yPos += 10;

    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    moduleData.content.teaching.forEach((point, index) => {
      if (yPos > 270) {
        pdf.addPage();
        yPos = 20;
      }
      const cleanPoint = point.replace(/<[^>]*>/g, "");
      const pointLines = pdf.splitTextToSize(`${index + 1}. ${cleanPoint}`, maxWidth);
      pdf.text(pointLines, margin, yPos);
      yPos += pointLines.length * 6 + 5;
    });

    // Reflection Questions
    if (yPos > 240) {
      pdf.addPage();
      yPos = 20;
    }
    yPos += 10;
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Reflection Questions", margin, yPos);
    yPos += 10;

    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    moduleData.content.reflection.forEach((question, index) => {
      if (yPos > 270) {
        pdf.addPage();
        yPos = 20;
      }
      const questionLines = pdf.splitTextToSize(`${index + 1}. ${question}`, maxWidth);
      pdf.text(questionLines, margin, yPos);
      yPos += questionLines.length * 6 + 8;
    });

    // Practicum Tasks
    if (yPos > 240) {
      pdf.addPage();
      yPos = 20;
    }
    yPos += 10;
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Practicum Tasks", margin, yPos);
    yPos += 10;

    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    moduleData.content.practicum.forEach((task, index) => {
      if (yPos > 270) {
        pdf.addPage();
        yPos = 20;
      }
      const taskLines = pdf.splitTextToSize(`${index + 1}. ${task}`, maxWidth);
      pdf.text(taskLines, margin, yPos);
      yPos += taskLines.length * 6 + 5;
    });

    // Portfolio Assignment
    if (yPos > 250) {
      pdf.addPage();
      yPos = 20;
    }
    yPos += 10;
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Portfolio Assignment", margin, yPos);
    yPos += 10;

    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    const portfolioLines = pdf.splitTextToSize(moduleData.content.portfolio, maxWidth);
    pdf.text(portfolioLines, margin, yPos);

    // Save PDF
    const filename = `${pathwayTitle.replace(/\s+/g, "-")}-Module-${moduleData.number}-Study-Guide.pdf`;
    pdf.save(filename);
  };

  const toggleAudioListened = (audioKey: string) => {
    const newListened = { ...listenedAudio, [audioKey]: !listenedAudio[audioKey] };
    setListenedAudio(newListened);
    const audioStorageKey = `axiom-audio-${pathway}-${moduleData.number}`;
    localStorage.setItem(audioStorageKey, JSON.stringify(newListened));
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-5xl">
        {/* Back Button */}
        <Link href={`/ministry/${pathway}`}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to {pathwayTitle}
          </Button>
        </Link>

        {/* Module Header */}
        <Card className="shadow-lg border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-8">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="text-sm">
                    Module {moduleData.number}
                  </Badge>
                  {isCompleted && (
                    <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-3xl mb-2">{moduleData.title}</CardTitle>
                <CardDescription className="text-base">
                  <span className="font-medium text-primary">Key Scripture:</span> {moduleData.scripture}
                </CardDescription>
              </div>
              <Button
                variant={isCompleted ? "outline" : "default"}
                size="sm"
                onClick={toggleCompletion}
                className="flex-shrink-0"
              >
                {isCompleted ? "Mark Incomplete" : "Mark Complete"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadStudyGuide}
                className="flex-shrink-0"
              >
                <Download className="w-4 h-4 mr-2" />
                Study Guide PDF
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/90 leading-relaxed">{moduleData.content.introduction}</p>
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="content">
              <BookOpen className="w-4 h-4 mr-2" />
              Content
            </TabsTrigger>
            <TabsTrigger value="videos">
              <Video className="w-4 h-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="audio">
              <Music className="w-4 h-4 mr-2" />
              Audio
            </TabsTrigger>
            <TabsTrigger value="practicum">
              <FileText className="w-4 h-4 mr-2" />
              Practicum
            </TabsTrigger>
            <TabsTrigger value="discussion">
              Discussion
            </TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6 mt-6">
            {/* Teaching Section */}
            <Card className="shadow-md border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Teaching</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {moduleData.content.teaching.map((point, index) => (
                  <div key={index} className="prose prose-sm max-w-none">
                    <p className="text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Reflection Questions */}
            <Card className="shadow-md border-border/50 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-xl">Reflection Questions</CardTitle>
                <CardDescription>
                  Take time to ponder these questions and journal your responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {moduleData.content.reflection.map((question, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-foreground/90">{question}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Video Resources</CardTitle>
                <CardDescription>
                  Watch these videos to deepen your understanding. Mark as watched when complete.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {moduleData.videos && moduleData.videos.length > 0 ? (
                  moduleData.videos.map((video, index) => {
                    const videoKey = `${pathway}-module${moduleData.number}-video${index}`;
                    const isWatched = watchedVideos[videoKey] || false;

                    return (
                      <div key={index} className="border border-border/50 rounded-lg p-4">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{video.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{video.description}</p>
                            <p className="text-xs text-muted-foreground">Duration: {video.duration}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={isWatched}
                              onCheckedChange={() => toggleVideoWatched(videoKey)}
                            />
                            <span className="text-sm text-muted-foreground">Watched</span>
                          </div>
                        </div>
                        <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted mt-3">
                          <iframe
                            src={getYouTubeEmbedUrl(video.url)}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    Video resources coming soon
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Audio Tab */}
          <TabsContent value="audio" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Audio Sermons & Teachings</CardTitle>
                <CardDescription>
                  Listen to sermons and teachings related to this module. Mark as listened when complete.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {moduleData.audio && moduleData.audio.length > 0 ? (
                  moduleData.audio.map((audio, index) => {
                    const audioKey = `${pathway}-module${moduleData.number}-audio${index}`;
                    const isListened = listenedAudio[audioKey] || false;

                    return (
                      <div key={index} className="border border-border/50 rounded-lg p-4">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{audio.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{audio.description}</p>
                            <p className="text-xs text-muted-foreground">Duration: {audio.duration}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={isListened}
                              onCheckedChange={() => toggleAudioListened(audioKey)}
                            />
                            <span className="text-sm text-muted-foreground">Listened</span>
                          </div>
                        </div>
                        <audio controls className="w-full mt-3">
                          <source src={audio.url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    Audio resources coming soon
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practicum Tab */}
          <TabsContent value="practicum" className="space-y-6 mt-6">
            <Card className="shadow-md border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Practicum Tasks</CardTitle>
                <CardDescription>
                  Apply what you've learned through these practical exercises
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {moduleData.content.practicum.map((task, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-foreground/90 flex-1">{task}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {moduleData.content.portfolio && (
              <Card className="shadow-md border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
                <CardHeader>
                  <CardTitle className="text-xl">Portfolio Task</CardTitle>
                  <CardDescription>
                    Document your learning and save to your portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 leading-relaxed mb-4">{moduleData.content.portfolio}</p>
                  <Link href="/portfolio">
                    <Button>Go to Portfolio</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Discussion Tab */}
          <TabsContent value="discussion" className="space-y-6 mt-6">
            <DiscussionForum pathway={pathway} moduleNumber={moduleData.number} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
