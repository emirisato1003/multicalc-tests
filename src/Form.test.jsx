import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import Form from "./Form";

describe('Form Component', () => {
    it('should disable calculate button when operand is empty', async() => {
        const user = userEvent.setup()
        render(<Form/>)
    })
})