import buildResponse from "../../helper/buildresponse";
import Responce from 'express';

describe('test buildResponse function', () => {
    test('test success', () => {
        const resultResponce: Responce = {
            status: jest.fn(),
            send: jest.fn()
        };
        buildResponse(resultResponce, 200, 'success');
        expect(resultResponce.status).toHaveBeenCalled();
        expect(resultResponce.status).toHaveBeenCalledWith(200);
        expect(resultResponce.send).toHaveBeenCalled();
        expect(resultResponce.send).toHaveBeenCalledWith('success');
    })
})