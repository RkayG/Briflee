import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "@/pages/dashboard";
import { Projects } from "@/pages/projects";
import { CreateProject } from "@/pages/create-project";
import { ProviderProjectDetail } from "@/pages/provider-project-detail";
import { Clients } from "@/pages/clients";
import { ClientProfile } from "@/pages/client-profile";
import { ClientPortal } from "@/pages/client-portal";
import { ClientProjectDetail } from "@/pages/client-project-detail";
import { DeliverableReview } from "@/pages/deliverable-review";
import { Settings } from "@/pages/settings";
import { Notifications } from "@/pages/notifications";
import { NotFound } from "@/pages/not-found";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <RouteProvider>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/new" element={<CreateProject />} />
                        <Route path="/projects/:id" element={<ProviderProjectDetail />} />
                        <Route path="/clients" element={<Clients />} />
                        <Route path="/clients/:id" element={<ClientProfile />} />
                        <Route path="/client-portal" element={<ClientPortal />} />
                        <Route path="/client-portal/project" element={<ClientProjectDetail />} />
                        <Route path="/deliverable/:id" element={<DeliverableReview />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
