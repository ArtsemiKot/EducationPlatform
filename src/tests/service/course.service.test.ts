import { createCourse, deleteCourse, getAllCourse, getCourseById, updateCourse } from "../../service/courses.service";
import * as repository from "../../repository/courses.repository"
describe('getAllCourse', () => {
    test('test 1', async () => {
        const repFunction = jest.spyOn(repository, 'getAllCourseDB')
        repFunction.mockResolvedValue([
            { id: 1, course: 'TS' },
            { id: 2, course: 'JS' }])
        const result = await getAllCourse()
        expect(repFunction).toHaveBeenCalled()
        expect(result[0].id).toBe(1)
        expect(result[1].id).toBe(2)
        expect(result[0].course).toBe('TS')
        expect(result[1].course).toBe('JS')
        expect(result).toEqual([
            { id: 1, course: 'TS' },
            { id: 2, course: 'JS' }
        ])
        expect(result).toHaveLength(2)
    })
    test('test 2', async () => {
        const repFunction = jest.spyOn(repository, 'getAllCourseDB')
        repFunction.mockResolvedValue([])
        try {
            await getAllCourse()
        } catch (error: any) {
            expect(error.message).toBe('no data')
        }
    })
})

describe('getCourseById', () => {
    test('test success', async () => {
        const repFunction = jest.spyOn(repository, 'getCourseByIdDB')
        repFunction.mockResolvedValue([
            { id: 1, course: 'TS' }])
        const result = await getCourseById(1)
        expect(repFunction).toHaveBeenCalled()
        expect(result[0].id).toBe(1)
        expect(result).toEqual([{ id: 1, course: 'TS' }])
        expect(result).toHaveLength(1)
    })
    test('test error', async () => {
        const repFunction = jest.spyOn(repository, 'getCourseByIdDB')
        repFunction.mockResolvedValue([])
        try {
            await getCourseById(3)
        } catch (error: any) {
            expect(error.message).toBe('no data')
        }
    })
})

describe('createCourse', () => {
    test('test create success', async () => {
        const repFunction = jest.spyOn(repository, 'createCourseDB')
        repFunction.mockResolvedValue([{ id: 1, course: 'TS' }])
        const result = await createCourse('TS')
        expect(repFunction).toHaveBeenCalled()
        expect(result[0].course).toBe('TS');
        expect(result).toEqual([{ id: 1, course: 'TS' }])
        expect(result).toHaveLength(1)
        expect(result.length).toBe(1)
    })
    test('test create error', async () => {
        const repFunction = jest.spyOn(repository, 'createCourseDB')
        repFunction.mockResolvedValue([])
        try {
            await createCourse("TS")
        } catch (error: any) {
            expect(error.message).toBe('no data')
        }
    })
})

describe('updateCourse', () => {
    test('test update success', async () => {
        const repFunction = jest.spyOn(repository, 'updateCourseDB')
        repFunction.mockResolvedValue([{ id: 1, course: 'TS' }])
        const result = await updateCourse(1, 'TS')
        expect(repFunction).toHaveBeenCalled()
        expect(result[0].course).toBe('TS');
        expect(result[0].id).toBe(1);
        expect(result).toEqual([{ id: 1, course: 'TS' }])
        expect(result).toHaveLength(1)
        expect(result.length).toBe(1)
    })
    test('test updateCourse error', async () => {
        const repFunction = jest.spyOn(repository, 'updateCourseDB')
        repFunction.mockResolvedValue([])
        try {
            await updateCourse(1, 'TS')
        } catch (error: any) {
            expect(error.message).toBe('no data')
        }
    })
})

describe('deleteCourse', () => {
    test('test delete success', async () => {
        const repFunction = jest.spyOn(repository, 'deleteCourseDB')
        repFunction.mockResolvedValue([{ id: 1, course: 'TS' }])
        const result = await deleteCourse(1)
        expect(repFunction).toHaveBeenCalled()
        expect(result[0].course).toBe('TS');
        expect(result[0].id).toBe(1);
        expect(result).toEqual([{ id: 1, course: 'TS' }])
        expect(result).toHaveLength(1)
        expect(result.length).toBe(1)
    })
    test('test deleteCourse error', async () => {
        const repFunction = jest.spyOn(repository, 'deleteCourseDB')
        repFunction.mockResolvedValue([])
        try {
            await deleteCourse(1)
        } catch (error: any) {
            expect(error.message).toBe('no data')
        }
    })
})