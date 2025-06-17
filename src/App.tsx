import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HealthPackage from "./pages/HealthPackage";
import Blog from "./pages/Blog";
import Doctor from "./pages/Doctor";
import ContactPage from "./pages/ContactPage";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import { WhatsappProvider } from "@/components/WhatsappWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsappProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/health-package" element={<HealthPackage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </WhatsappProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
