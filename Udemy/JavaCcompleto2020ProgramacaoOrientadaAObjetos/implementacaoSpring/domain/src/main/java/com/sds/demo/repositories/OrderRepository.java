package com.sds.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sds.demo.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
