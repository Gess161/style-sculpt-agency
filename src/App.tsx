import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewsPage from "./pages/News";
import ServiceAudit from "./pages/ServiceAudit";
import ServiceAnalysis from "./pages/ServiceAnalysis";
import ServiceNotes from "./pages/ServiceNotes";
import ServiceTax from "./pages/ServiceTax";
import ServiceTransfer from "./pages/ServiceTransfer";
import Header from "@/components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/services/audit" element={<ServiceAudit />} />
          <Route path="/services/analysis" element={<ServiceAnalysis />} />
          <Route path="/services/notes" element={<ServiceNotes />} />
          <Route path="/services/tax" element={<ServiceTax />} />
          <Route path="/services/transfer" element={<ServiceTransfer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
