import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi, expect } from "vitest";
import "@testing-library/jest-dom/vitest"
import Form from "./Form";
import { OperandContext } from "./context/OperandContext";
import { Buttons } from "@testing-library/user-event/dist/cjs/system/pointer/buttons.js";
import { click } from "@testing-library/user-event/dist/cjs/convenience/click.js";

describe('Form', () => {
    it('should disable submit button when input is empty', async() => {
        // create a mock context value witch is [operand, setOperand] state in App.jsx 
        const mockContextValue = {
            operand: 0,
            setOperand: vi.fn()
        };
        render(
            <OperandContext.Provider value={mockContextValue}>
                <Form />
            </OperandContext.Provider>
        );
        // find the input and button 
        const input = screen.getByLabelText(/Calculate with:/i);
        const button = screen.getByRole('button', { name: /submit/i });

        // expecting the button is not disable since operand value has '0'
        expect(button).not.toBeDisabled();
        // clear the input to make it empty
        await userEvent.clear(input)
        
        // expecting now the button is disabled since there is empty value in operand state
        expect(button).toBeDisabled()
        await userEvent.click(button)
    });
});