'use strict';

describe('logger', () => {
    let testLoggerName;
    let logger;

    beforeEach(() => {
        const { Logger } = require('../../../lib/modules/logger');

        testLoggerName = 'TestLogger';
        logger = Logger(testLoggerName);
    });

    test('should be created', () => {
        // Given, When, Then
        expect(logger).toBeDefined();
    });

    test.each([ 'info', 'warn', 'error' ])('shold print %s method on debug console', (logLevel) => {
        // Given
        const consoleSpy = jest.spyOn(global.console, logLevel).mockImplementation(jest.fn());
        const testMessage = 'Test message.';

        // When
        logger[logLevel](testMessage);

        // Then
        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(`[${testLoggerName}] [${logLevel.toUpperCase()}]: ${testMessage}`);
    });
});
