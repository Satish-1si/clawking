import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- changed
import useScrollToTop from "./hooks/useScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Noon from "./pages/noon";
import { lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Game = lazy(() => import("./pages/game"));

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      {/* Lazy loaded route */}
      <Route
        path="/PlayZone"
        element={
         <Suspense fallback={<div className="p-4 text-center">Loading Game...</div>}>
  <Game />  {/* or whatever component should render here */}
</Suspense>

        }
      />

      <Route path="/noon" element={<Noon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter> {/* <-- changed from BrowserRouter */}
        <AppContent />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
