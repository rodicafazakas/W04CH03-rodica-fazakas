import { render, screen } from "@testing-library/react";
import PhoneContext from "../../PhoneContext.js";
import Keyboard from "./Keyboard.js";

describe("Given a Keyboard component", ()=> {
    describe("When it does not have the off class", ()=>{
        test("Then it should appear on screen", ()=> {
            const classNameTest = "message";
            
            render(
            <PhoneContext.Provider value={classNameTest} >    
                <Info />
            </PhoneContext.Provider>    
            )
            
            const result = screen.getByText("Calling...");
            expect(result).toBeInTheDocument();
            
        })
    })
})