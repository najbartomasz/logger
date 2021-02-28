'use strict';

describe('logger-factory', () => {
    let LoggerMock;

    let loggerFactory;

    beforeEach(() => {
        jest.doMock('../../../lib/modules/logger');
        LoggerMock = require('../../../lib/modules/logger').Logger;

        loggerFactory = require('../../../lib/modules/logger-factory').loggerFactory;
    });

    test('should be created', () => {
        // Given, When, Then
        expect(loggerFactory).toBeDefined();
    });

    test('should return Logger object', () => {
        // Given
        const testLoggerName = 'TestLogger';

        // When
        loggerFactory.create(testLoggerName);

        // Then
        expect(LoggerMock).toHaveBeenCalledTimes(1);
        expect(LoggerMock).toHaveBeenCalledWith(testLoggerName);
    });
});
