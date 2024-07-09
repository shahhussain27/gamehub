import React, { useState, useEffect } from "react";
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

const Form = ({
  gameId,
  posterUrl,
  title,
  price,
  gameUrl,
  gameSize,
  platforms,
}) => {
  const [status, setStatus] = useState("");
  const platformObj = Object.keys(platforms || {}).map((key) => [key]) || {};
  const [gameData, setGameData] = useState({
    gameId: gameId || Date.now() + Math.random(),
    posterUrl: posterUrl || "",
    title: title || "",
    price: price || "Free",
    gameUrl: gameUrl || "",
    gameSize: gameSize || "",
    platforms: platformObj || [],
  });
  // console.log(gameData.platforms);

  const onChange = (e) => {
    if (e.target.type === "button") {
      console.log(e.target);
      const platformId = e.target.id;
      const isChecked = e.target.getAttribute("data-state") === "unchecked";

      if (isChecked) {
        setGameData((prevForm) => ({
          ...prevForm,
          platforms: [...prevForm.platforms, platformId],
        }));
      } else {
        setGameData((prevForm) => ({
          ...prevForm,
          platforms: prevForm.platforms.filter((id) => id !== platformId),
        }));
      }
    } else {
      const { name, value } = e.target;
      setGameData((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const addGame = async () => {
    try {
      setStatus("Loading...");
      const response = await fetch("/api/addGame", {
        method: "POST",
        body: JSON.stringify(gameData),
      });

      if (!response.ok) {
        setStatus("Failed");
        throw new Error("Failed to add game");
      }
      const data = await response.json();
      setStatus("Success");
    } catch (error) {
      setStatus("Error");
      console.error(error);
    }
  };

  const HandleSubmit = () => {
    addGame();
  };

  return (
    <>
      <div className="flex justify-center my-16">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle>Mirza's Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-4 max-sm:grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="posterUrl">Game Poster URL</Label>
                <Input
                  id="posterUrl"
                  placeholder="Game Poster URL"
                  name="posterUrl"
                  onChange={onChange}
                  value={gameData.posterUrl}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Game Title</Label>
                <Input
                  id="title"
                  placeholder="Game Title"
                  name="title"
                  onChange={onChange}
                  value={gameData.title}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Game Price (Optional)</Label>
                <Input
                  id="price"
                  type="text"
                  placeholder="Game Price"
                  name="price"
                  onChange={onChange}
                  value={gameData.price}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gameUrl">Game URL</Label>
                <Input
                  id="gameUrl"
                  type="text"
                  name="gameUrl"
                  placeholder="Game URL"
                  onChange={onChange}
                  value={gameData.gameUrl}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="GameSize">Game Size</Label>
                <Input
                  id="gameSize"
                  type="text"
                  name="gameSize"
                  placeholder="Game Size"
                  onChange={onChange}
                  value={gameData.gameSize}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="platforms">Platforms</Label>
                <RadioGroup className="flex max-sm:flex-wrap gap-4">
                  <div className="flex  items-center gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        id="android"
                        name="android"
                        onClick={onChange}
                        // checked={platformObj[0] ? true : false}
                      />
                      Android
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        id="ios"
                        name="ios"
                        onClick={onChange}
                        // checked={platformObj[1] ? true : false}
                      />
                      IOS
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        id="windows"
                        name="windows"
                        onClick={onChange}
                        // checked={platformObj[2] ? true : false}
                      />
                      Windows
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        id="browser"
                        name="browser"
                        onClick={onChange}
                        // checked={platformObj[3] ? true : "false"}
                      />
                      Browser
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              onClick={HandleSubmit}
              type="submit"
              className="bg-black text-white hover:bg-slate-900"
            >
              {title ? `Update ${title}` : "Add Game"}
            </Button>
            {status}
          </CardFooter>
        </Card>

      </div>
    </>
  );
};

export default Form;
