import { renderHook, waitFor} from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Prueba en useFetchGifs', () => { 

    test('debe de regresar el estado inicial ', () => { 

        // useFetchGifs();
        const { result } = renderHook( () => useFetchGifs('One punch') )

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe de retonar un arreglo de imagenes y isLoading en false', async() => { 

        const { result } = renderHook( () => useFetchGifs('One punch') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),

        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan
        (0);
        expect(isLoading).toBeFalsy();

    })

 })