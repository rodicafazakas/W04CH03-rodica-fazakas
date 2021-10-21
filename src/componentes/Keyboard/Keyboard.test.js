import { render, screen } from "@testing-library/react";
import PhoneContext from "../../PhoneContext.js";
import Keyboard from "./Keyboard.js";
import userEvent from "@testing-library/user-event";

describe("Given a Keyboard component", ()=> {
    describe("When the key 9 is pressed", ()=>{
        test("Then it should submit 9", ()=> {
            const actionOnClick = jest.fn();
            const contextValue = {actionOnClick: actionOnClick};
            
            render(
            <PhoneContext.Provider value={contextValue} >    
                <Keyboard />
            </PhoneContext.Provider>    
            )

            const keyButton = screen.getByText("9");
            console.log(keyButton);
            userEvent.click(keyButton);

            expect(actionOnClick).toHaveBeenCalled();
            
        })
    })
})