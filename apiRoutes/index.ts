
import {
    FastifyInstance,
    FastifyRequest as Request,
    FastifyReply as Reply,
    RouteOptions,
    DoneFuncWithErrOrRes as Done,
    HTTPMethods,
} from "fastify"


export const getUserProfile: RouteOptions = {
    url: "/user",
    method: "GET",
    // preValidation: [validateToken],
    handler: async (req) => {
        // const userID = req.requestContext.get("user_id")
        // const user = await userController.getUser(userID)
        return "Hi am a user"
    },
}