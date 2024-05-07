const express = require('express');

class HealthCheck {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/health', this.checkHealth.bind(this));
  }

  async checkHealth(req, res) {
    try {
      // Perform health check logic here
      const status = 'OK';
      const message = 'Service is running';

      res.status(200).json({ status, message });
    } catch (error) {
      console.error('Health check failed:', error);
      res.status(500).json({ error: 'Health check failed' });
    }
  }
}

module.exports = HealthCheck;