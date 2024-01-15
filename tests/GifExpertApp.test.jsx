import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Test of GifExpertApp', () => {


    test('debe devolver primera tarjeta', () => {

        render(<GifExpertApp />);

        expect(screen.getByText('GifExpertApp')).toBeTruthy();
        expect(screen.getAllByRole('heading', {level:3}).length).toBe(1);
    })



})