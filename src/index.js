const { GlueClient, StartCrawlerCommand } = require('@aws-sdk/client-glue');

exports.handler = async function(event, context) {
  const glueClient = new GlueClient();
  
  try {
    const command = new StartCrawlerCommand({ 
      Name: process.env.CRAWLER_NAME 
    });
    
    await glueClient.send(command);
    console.log("Successfully triggered crawler");
    return "Crawler started successfully";
  } catch (error) {
    // Check if Crawler is already running
    if (error.name === 'CrawlerRunningException') {
      console.log('Crawler already running; ignoring trigger.');
      return error.message;
    }
    
    // For other errors, rethrow
    console.error('Error starting crawler:', error);
    throw error;
  }
};
