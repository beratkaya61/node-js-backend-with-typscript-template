import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../handlers/ErrorHandler";
import SubscriptionService from "../services/SubscriptionService";

class SubscriptionController {
  constructor() {}
  public async createSubscription(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const newSubscription = await SubscriptionService.create(req, res, next);
    if (newSubscription) {
      res.status(201).json({
        msg: "Üyelik oluşturuldu",
      });
    }
    ErrorHandler.handler(
      {
        msg: "Üyelik oluştulamadı",
        statusCode: 500,
      },
      res
    );
  }
}

export default new SubscriptionController();
