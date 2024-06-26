import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Form = () => {
  return (
    <>
      <div className="flex justify-center my-16">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle>Mirza's Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-3 max-sm:grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="posterUrl">Game Poster URL</Label>
                <Input id="posterUrl" placeholder="Game Poster URL" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Game Title</Label>
                <Input id="title" placeholder="Game Title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Game Price (Optional)</Label>
                <Input id="price" type="text" placeholder="Game Price" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gameUrl">Game URL</Label>
                <Input id="gameUrl" type="text" placeholder="Game URL" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="platforms">Platforms</Label>
                <RadioGroup className="flex max-sm:flex-wrap gap-4">
                  <div className="flex  items-center gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox id="android" />
                      Android
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox id="ios" />
                      IOS
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox id="windows" />
                      Windows
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox id="browser" />
                      Browser
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="bg-black text-white hover:bg-slate-900"
            >
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Form;
