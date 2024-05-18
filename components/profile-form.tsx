"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Login } from "./login";
import { CreateAccount } from "./create-account";

export function ProfileForm() {
  return (
    <div>
      <Tabs defaultValue="login">
        <TabsList className="w-full mx-auto">
          <TabsTrigger value="login">Faça Login</TabsTrigger>
          <TabsTrigger value="createAccount">Crie uma conta!</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="createAccount">
          <CreateAccount />
        </TabsContent>
      </Tabs>
    </div>
  );
}
