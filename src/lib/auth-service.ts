import type { EPSProvider } from "./eps-data";

export interface AuthRequest {
  epsId: string;
  documentType: string;
  documentNumber: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  sessionId?: string;
}

/**
 * Sends authentication request to the n8n webhook proxy.
 * When Lovable Cloud is enabled, this will call an edge function.
 * For now, it simulates the flow.
 */
export async function authenticateWithEPS(
  request: AuthRequest
): Promise<AuthResponse> {
  // TODO: Replace with edge function call when Cloud is enabled
  // const { data, error } = await supabase.functions.invoke('eps-auth', { body: request });

  // Simulated delay to mimic n8n workflow execution
  await new Promise((resolve) => setTimeout(resolve, 2500));

  // Simulate success for demo purposes
  if (request.documentNumber && request.password) {
    return {
      success: true,
      message: "Autenticación exitosa",
      sessionId: `session_${request.epsId}_${Date.now()}`,
    };
  }

  return {
    success: false,
    message: "Credenciales incorrectas. Verifica tu documento y contraseña.",
  };
}
