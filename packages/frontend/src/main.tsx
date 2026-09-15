import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "@/pages/dashboard";
import { Projects } from "@/pages/projects";
import { CreateProject } from "@/pages/create-project";
import { Clients } from "@/pages/clients";
import { ClientPortal } from "@/pages/client-portal";
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
                        <Route path="/clients" element={<Clients />} />
                        <Route path="/client-portal" element={<ClientPortal />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
