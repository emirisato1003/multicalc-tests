import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import Form from "./Form";

describe('Form Component', () => {
    it('should disable submit button when operand is empty', async() => {
        const user = userEvent.setup()
        render(<Form/>)

        const operandInput = screen.getByLabelText(/calculate with:/i)
        const submitButton = screen.getByRole('button', {name: /submit/i })
        expect(submitButton).toBeDisabled()

        await user.type(operandInput, '41')

        await user.clear(operandInput)

        expect(calculateButton).toBeDisabled()
    })
})