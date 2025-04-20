import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi, expect } from "vitest";
import "@testing-library/jest-dom/vitest"
import Form from "./Form";
import { OperandContext } from "./context/OperandContext";

describe('Form', () => {
    it('should disable submit button when input is empty', async() => {
        const mockContextValue = {
            operand: 0,
            setOperand: vi.fn()
        };
        render(
            <OperandContext.Provider value={mockContextValue}>
                <Form />
            </OperandContext.Provider>
        );
        const input = screen.getByLabelText(/Calculate with:/i);
        const button = screen.getByRole('button', { name: /submit/i });

        expect(button).not.toBeDisabled();
        await userEvent.clear(input)
        
        expect(button).toBeDisabled()
        await userEvent.click(button)
    });
});