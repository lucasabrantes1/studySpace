package com.sds.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sds.demo.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

}
 