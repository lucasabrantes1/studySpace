package com.sds.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sds.demo.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
