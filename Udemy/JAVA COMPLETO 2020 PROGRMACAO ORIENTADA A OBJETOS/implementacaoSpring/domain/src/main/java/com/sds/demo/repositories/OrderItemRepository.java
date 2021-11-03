package com.sds.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sds.demo.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
 