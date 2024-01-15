
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test of GifItem', () => {

    const title = 'Test Title';
    const url = 'http://test.url/';


    test('snapshot is correct', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar la imagen con el URL y ALT indicado', () => {

        render(<GifItem title={title} url={url} />);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url)
        expect(alt).toBe(title)

    })


    test('debe mostrar el titulo en el componente', () => {

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

    })


})