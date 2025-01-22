package com.sentiment.sentiment_backend.controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from your frontend
public class SentimentController {

    @PostMapping("/analyze")
    public Map<String, String> analyze(@RequestBody Map<String, String> request) {
        String link = request.get("link");
        // Fetch post content from the link (using Facebook/Instagram API)
        // Analyze sentiment (using a library or external service)
        String sentiment = "Positive"; // Placeholder for now
        return Map.of("sentiment", sentiment);
    }
    @PostMapping("/register")
    public Map<String, String> registerUser(@RequestBody Map<String, String> user) {
        System.out.println("Register endpoint hit");
        System.out.println("Received user data: " + user);
        return Map.of("message", "User registered successfully");
    }

}

