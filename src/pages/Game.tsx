import { useState } from "react";
import Button from "../components/Button";
import dice_1 from "../assets/dice_1.png";
import dice_2 from "../assets/dice_2.png";
import dice_3 from "../assets/dice_3.png";
import dice_4 from "../assets/dice_4.png";
import dice_5 from "../assets/dice_5.png";
import dice_6 from "../assets/dice_6.png";

const Game = () => {
  const [score, setScore] = useState<number>(0);
  const [dice, setDice] = useState<number>(1);
  const [selectedDice, setSelectedDice] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between pt-10">
        <div className="rounded-md ">
          <div className="flex justify-center flex-col items-center">
            <div className="text-5xl font-bold">{score}</div>
            <div>Total Score</div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((x) => (
                <button
                  key={x}
                  className={
                    " py-2 px-4 border text-black hover:text-white text-center text-sm focus:bg-slate-700  active:bg-slate-700 hover:bg-slate-700 ml-2" +
                    (selectedDice === x ? " bg-slate-800 text-white" : " ")
                  }
                  type="button"
                  onClick={() => {
                    setSelectedDice(x);
                  }}
                >
                  <div>{x}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-end pt-4">Select Number</div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="grid grid-flow-row gap-2">
            <div className="flex flex-col items-center justify-center pt-10 w-52">
              <div className="grid grid-flow-row gap-2 ">
                <div className=" ">
                  <button
                    className="w-full"
                    type="button"
                    disabled={selectedDice == 0}
                    onClick={() => {
                      function randomIntFromInterval(min: number, max: number) {
                        // min and max included
                        return Math.floor(
                          Math.random() * (max - min + 1) + min,
                        );
                      }

                      const randInt = randomIntFromInterval(1, 6);

                      if (randInt === selectedDice) {
                        setScore(score + randInt);
                      } else {
                        setScore(score - 2);
                      }

                      setDice(randInt);
                    }}
                  >
                    <img
                      src={
                        dice == 1
                          ? dice_1
                          : dice == 2
                          ? dice_2
                          : dice == 3
                          ? dice_3
                          : dice == 4
                          ? dice_4
                          : dice == 5
                          ? dice_5
                          : dice_6
                      }
                      alt={String(dice)}
                    />
                  </button>
                </div>
              </div>

              <div className="py-2">
                <h1 className="text-2xl">Click on Dice to roll</h1>
              </div>

              <div className="py-2 w-full">
                <Button title="Reset Score" handleClick={() => setScore(0)} />
              </div>
              <div className="py-2 w-full">
                <Button
                  title={(show ? "Show" : "Hide") + " Rules"}
                  handleClick={() => setShow(!show)}
                />
              </div>

              {!show && (
                <div className="mt-8 w-144 bg-red-50 rounded-sm p-4">
                  <h1 className="pb-2 font-bold">How to play dice game</h1>
                  <p>Select any number</p>
                  <p>Click on dice image</p>
                  <p>
                    If selected number equals dice number, you will get same
                    point as dice
                  </p>
                  <p>If you guess wrong 2 points will be deducted</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
