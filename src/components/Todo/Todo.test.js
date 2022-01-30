import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './index';

describe('Todo testleri', () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />)

        button = screen.getByText('Add')
        input = screen.getByLabelText('Todo')
    })
    test('Inputa string girilip butona basilinca listeye eklenmeli', () => {
        //Inputu doldur
        const name = 'Nouman'
        userEvent.type(input, name)

        //butona tikla
        userEvent.click(button)

        //assertion
        expect(screen.getByText(name)).toBeInTheDocument()
    })

})