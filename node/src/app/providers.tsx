"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <AnimatePresence>{children}</AnimatePresence>
        </QueryClientProvider>
    );
}
