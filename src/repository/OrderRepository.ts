import { EntityRepository, Repository } from "typeorm";
import { Order } from "../entity/Order";

@EntityRepository(Order)
class OrderRepository extends Repository<Order>{

}

export {OrderRepository}