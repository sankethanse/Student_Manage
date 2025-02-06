package com.student.backend.entity;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "students")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String age;

    @Column(nullable = false)
    private String className;

    @Column(nullable = false, unique = true)
    private String phoneNumber;
}
