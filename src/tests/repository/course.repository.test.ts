import {  getAllCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseDB } from "../../repository/courses.repository";
const mclient = {
    query: jest.fn(),
  };
  
  jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => mclient) };
    return { Pool: jest.fn(() => pool) };
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  describe('test getAllCourseDB function', () => {
    test('function return success', async () => {
      mclient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
      const result = await getAllCourseDB();
  
      expect(mclient.query).toHaveBeenCalled();
      expect(result[0].id).toBe(1);
      expect(result[0].course).toBe('TS');
      expect(result).toHaveLength(1);
      expect(result).toEqual([{ id: 1, course: 'TS' }]);
    });
  });
  
  describe('test getCourseByIdDB function', () => {
    test('function return success', async () => {
      mclient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
      const result = await getCourseByIdDB(1);
  
      expect(mclient.query).toHaveBeenCalled();
      expect(result[0].course).toBe('TS');
      expect(result).toHaveLength(1);
      expect(result).toEqual([{ id: 1, course: 'TS' }]);
    });
  });
  
  describe('test createCourseDB function', () => {
    test('function return success', async () => {
      mclient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
      const result = await createCourseDB('TS');
  
      expect(mclient.query).toHaveBeenCalled();
      expect(result[0].id).toBe(1);
      expect(result[0].course).toBe('TS');
      expect(result).toEqual([{ id: 1, course: 'TS' }]);
      expect(result).toHaveLength(1);
    });
  });
  
  describe('test updateCourseDB function', () => {
    test('function return success', async () => {
      mclient.query.mockResolvedValue({ rows: [{ id: 2, course: 'JS' }] });
      const result = await updateCourseDB(2, 'JS');
  
      expect(mclient.query).toHaveBeenCalled();
      expect(result[0].id).toBe(2);
      expect(result[0].course).toBe('JS');
      expect(result).toHaveLength(1);
      expect(result).toEqual([{ id: 2, course: 'JS' }]);
    });
  });
  
  describe('test deleteCourseByIdDB function', () => {
    test('function return success', async () => {
      mclient.query.mockResolvedValue({ rows: [{ id: 2, course: 'JS' }] });
      const result = await deleteCourseDB(2);
  
      expect(mclient.query).toHaveBeenCalled();
      expect(result[0].id).toBe(2);
      expect(result[0].course).toBe('JS');
      expect(result).toHaveLength(1);
      expect(result).toEqual([{ id: 2, course: 'JS' }]);
    });
  });