import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { jsPDF } from "jspdf";
import { allModules } from "@/data/moduleContent";

interface PathwayStudyGuideProps {
  pathway: string;
  pathwayName: string;
}

export default function PathwayStudyGuide({ pathway, pathwayName }: PathwayStudyGuideProps) {
  const generateStudyGuide = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Get all modules for this pathway
    const pathwayModules = allModules.filter(m => m.pathway === pathway);

    // Title Page
    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    pdf.text(`${pathwayName}`, pageWidth / 2, 40, { align: "center" });
    
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "normal");
    pdf.text("Complete Study Guide", pageWidth / 2, 55, { align: "center" });
    
    pdf.setFontSize(12);
    pdf.text("Axiom Ministry Studies", pageWidth / 2, 70, { align: "center" });
    pdf.text("Equipping the Saints for the Work of Ministry", pageWidth / 2, 80, { align: "center" });
    
    pdf.addPage();
    yPosition = margin;

    // Table of Contents
    pdf.setFontSize(18);
    pdf.setFont("helvetica", "bold");
    pdf.text("Table of Contents", margin, yPosition);
    yPosition += 15;

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pathwayModules.forEach((module, index) => {
      pdf.text(`Module ${module.number}: ${module.title}`, margin + 5, yPosition);
      yPosition += 8;
    });

    // Module Content
    pathwayModules.forEach((module, moduleIndex) => {
      pdf.addPage();
      yPosition = margin;

      // Module Title
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      const moduleTitle = `Module ${module.number}: ${module.title}`;
      pdf.text(moduleTitle, margin, yPosition);
      yPosition += 10;

      // Description
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "italic");
      const descLines = pdf.splitTextToSize(module.description, maxWidth);
      pdf.text(descLines, margin, yPosition);
      yPosition += descLines.length * 6 + 5;

      // Scripture
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text("Scripture:", margin, yPosition);
      yPosition += 7;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      const scriptureLines = pdf.splitTextToSize(module.scripture, maxWidth);
      pdf.text(scriptureLines, margin, yPosition);
      yPosition += scriptureLines.length * 6 + 8;

      // Introduction
      if (yPosition > pageHeight - 40) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text("Introduction:", margin, yPosition);
      yPosition += 7;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      const introLines = pdf.splitTextToSize(module.content.introduction, maxWidth);
      pdf.text(introLines, margin, yPosition);
      yPosition += introLines.length * 6 + 8;

      // Teaching Points
      if (yPosition > pageHeight - 40) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text("Teaching Points:", margin, yPosition);
      yPosition += 7;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);

      module.content.teaching.forEach((point, index) => {
        if (yPosition > pageHeight - 30) {
          pdf.addPage();
          yPosition = margin;
        }
        const pointLines = pdf.splitTextToSize(`${index + 1}. ${point}`, maxWidth - 5);
        pdf.text(pointLines, margin + 5, yPosition);
        yPosition += pointLines.length * 6 + 5;
      });

      yPosition += 5;

      // Reflection Questions
      if (yPosition > pageHeight - 40) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text("Reflection Questions:", margin, yPosition);
      yPosition += 7;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);

      module.content.reflection.forEach((question, index) => {
        if (yPosition > pageHeight - 30) {
          pdf.addPage();
          yPosition = margin;
        }
        const questionLines = pdf.splitTextToSize(`${index + 1}. ${question}`, maxWidth - 5);
        pdf.text(questionLines, margin + 5, yPosition);
        yPosition += questionLines.length * 6 + 10; // Extra space for answers
      });

      yPosition += 5;

      // Practicum Tasks
      if (yPosition > pageHeight - 40) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text("Practicum Tasks:", margin, yPosition);
      yPosition += 7;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);

      module.content.practicum.forEach((task, index) => {
        if (yPosition > pageHeight - 30) {
          pdf.addPage();
          yPosition = margin;
        }
        const taskLines = pdf.splitTextToSize(`${index + 1}. ${task}`, maxWidth - 5);
        pdf.text(taskLines, margin + 5, yPosition);
        yPosition += taskLines.length * 6 + 5;
      });

      yPosition += 5;

      // Portfolio Assignment
      if (yPosition > pageHeight - 40) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text("Portfolio Assignment:", margin, yPosition);
      yPosition += 7;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      const portfolioLines = pdf.splitTextToSize(module.content.portfolio, maxWidth);
      pdf.text(portfolioLines, margin, yPosition);
    });

    // Save the PDF
    const fileName = `${pathway}-ministry-study-guide.pdf`;
    pdf.save(fileName);
  };

  return (
    <Button onClick={generateStudyGuide} variant="outline" className="gap-2">
      <FileDown className="w-4 h-4" />
      Download Complete Study Guide (PDF)
    </Button>
  );
}
