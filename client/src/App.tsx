import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Aiwebsite from "@/pages/blob/Aiwebsite";
import SignLanguage from "@/pages/blob/SignLanguage";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blob/aiwebsite" component={Aiwebsite} />
      <Route path="/blob/signlanguage" component={SignLanguage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
