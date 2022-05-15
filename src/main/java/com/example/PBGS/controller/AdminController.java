package com.example.PBGS.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.PBGS.exception.ResourceNotFoundException;
import com.example.PBGS.model.Admin;
import com.example.PBGS.repository.AdminRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestControllerAdvice
@RequestMapping("/api/v1/")
public class AdminController {
	
	@Autowired
	private AdminRepository adminRepository;
	
	//Get all Admins
	@GetMapping("/admins")
	public List<Admin> getAllAdmins(){
		return adminRepository.findAll();
	}
	
	//Add admin rest API
	@PostMapping("/admins")
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminRepository.save(admin);
	}
	
	//Get Admin by ID rest API
	@GetMapping("/admins/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
		Admin admin = adminRepository.findById(id).orElseThrow(() 
				-> new ResourceNotFoundException("Admin Not Exist with Id:" + id));
	return ResponseEntity.ok(admin);
	}
	
	//Update Admin rest API
	@PutMapping("/admins/{id}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable Long id, @RequestBody Admin adminDetails){
		Admin admin = adminRepository.findById(id).orElseThrow(() 
				-> new ResourceNotFoundException("Admin Not Exist with Id:" + id));
		
		admin.setName(adminDetails.getName());
		admin.setContactNo(adminDetails.getContactNo());
		admin.setAddress(adminDetails.getAddress());
		admin.setEmail(adminDetails.getEmail());
		
		Admin UpdatedAdmin = adminRepository.save(admin);
		return ResponseEntity.ok(UpdatedAdmin);
	}
	
	//Delete Admin Rest API
	@DeleteMapping("/admins/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteAdmin(@PathVariable Long id){
		Admin admin = adminRepository.findById(id).orElseThrow(() 
				-> new ResourceNotFoundException("Admin Not Exist with Id:" + id));
		
		adminRepository.delete(admin);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
 	
}
