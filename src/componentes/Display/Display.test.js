import { render, screen } from "@testing-library/react";
import PhoneContext from "../../PhoneContext.js";
import Display from "./Display.js";

describe("Given a Display component", ()=> {
    describe("When it receives a phone number", ()=>{
        test("Then it renders it", ()=> {
            const phoneNumberTest = "123456789";
            
            render(
            <PhoneContext.Provider value={phoneNumberTest} >    
                <Display />
            </PhoneContext.Provider>    
            )
            
            const result = screen.getByPlaceholderText("phone-number");
            expect(result).toBeInTheDocument();
            
        })
    })
})