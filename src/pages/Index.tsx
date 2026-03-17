import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { EPSSelector } from "@/components/EPSSelector";
import { EPSLoginForm } from "@/components/EPSLoginForm";
import { AuthSuccess } from "@/components/AuthSuccess";
import type { EPSProvider } from "@/lib/eps-data";
import type { AuthResponse } from "@/lib/auth-service";
import { toast } from "sonner";

type Step = "select" | "login" | "success";

const Index = () => {
  const [step, setStep] = useState<Step>("select");
  const [selectedEPS, setSelectedEPS] = useState<EPSProvider | null>(null);
  const [authResponse, setAuthResponse] = useState<AuthResponse | null>(null);

  const handleSelectEPS = (eps: EPSProvider) => {
    setSelectedEPS(eps);
    setStep("login");
  };

  const handleAuthSuccess = (response: AuthResponse) => {
    setAuthResponse(response);
    setStep("success");
    toast.success("Sesión iniciada correctamente");
  };

  const handleAuthError = (message: string) => {
    toast.error(message);
  };

  const handleDisconnect = () => {
    setSelectedEPS(null);
    setAuthResponse(null);
    setStep("select");
  };

  const handleContinue = () => {
    toast.info("Módulo de agendamiento disponible en Sprint 2");
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="px-4 py-12">
        {step === "select" && <EPSSelector onSelect={handleSelectEPS} />}

        {step === "login" && selectedEPS && (
          <EPSLoginForm
            eps={selectedEPS}
            onBack={() => setStep("select")}
            onSuccess={handleAuthSuccess}
            onError={handleAuthError}
          />
        )}

        {step === "success" && selectedEPS && (
          <AuthSuccess
            eps={selectedEPS}
            onContinue={handleContinue}
            onDisconnect={handleDisconnect}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
