export const SpringQuestion = [
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is Spring Boot?",
      "correct_answer": "A tool for quickly creating stand-alone, production-grade Spring-based applications",
      "incorrect_answers": [
        "A Java-based framework for building enterprise applications",
        "A lightweight framework for building microservices",
        "A database management system"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which annotation is used to mark the main class of a Spring Boot application?",
      "correct_answer": "@SpringBootApplication",
      "incorrect_answers": [
        "@MainClass",
        "@SpringMain",
        "@SpringBootMain"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What does Spring Boot Starter provide?",
      "correct_answer": "Pre-configured dependencies to simplify application setup",
      "incorrect_answers": [
        "A way to start Spring applications automatically",
        "A built-in server for hosting web applications",
        "Tools for automated testing"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which of the following dependencies is typically included in a Spring Boot web application to handle HTTP requests and responses?",
      "correct_answer": "spring-boot-starter-web",
      "incorrect_answers": [
        "spring-boot-starter-logging",
        "spring-boot-starter-data-jpa",
        "spring-boot-starter-security"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What embedded server does Spring Boot use by default?",
      "correct_answer": "Tomcat",
      "incorrect_answers": [
        "Jetty",
        "Undertow",
        "GlassFish"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which annotation is used to define a Spring Boot REST controller?",
      "correct_answer": "@RestController",
      "incorrect_answers": [
        "@Controller",
        "@Service",
        "@Component"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of Spring Boot Actuator?",
      "correct_answer": "To provide insight into the running application",
      "incorrect_answers": [
        "To manage application dependencies",
        "To configure database connections",
        "To handle authentication and authorization"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which property file is used to define environment-specific configurations in Spring Boot?",
      "correct_answer": "application.properties",
      "incorrect_answers": [
        "application.yml",
        "bootstrap.yml",
        "environment.properties"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you enable cross-origin resource sharing (CORS) in a Spring Boot application?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "By annotating the controller with @CrossOrigin",
        "By configuring it in application.yml",
        "By using a filter"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the default port for a Spring Boot application?",
      "correct_answer": "8080",
      "incorrect_answers": [
        "8000",
        "9090",
        "80"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which of the following annotations can be used to enable Spring Data JPA repositories in a Spring Boot application?",
      "correct_answer": "@EnableJpaRepositories",
      "incorrect_answers": [
        "@SpringBootApplication",
        "@EnableAutoConfiguration",
        "@EntityScan"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How does Spring Boot simplify Spring application configuration?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "By providing sensible default configurations",
        "By eliminating the need for configuration files",
        "By automatically configuring components based on classpath and other conditions"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which of the following annotations is used to inject dependencies in Spring Boot?",
      "correct_answer": "@Autowired",
      "incorrect_answers": [
        "@Inject",
        "@Bean",
        "@Resource"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is Spring Boot Auto-configuration?",
      "correct_answer": "A feature that automatically configures Spring beans based on the classpath",
      "incorrect_answers": [
        "A way to automatically start Spring applications",
        "An approach for automatically deploying Spring applications to the cloud",
        "None of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you customize the error pages in a Spring Boot application?",
      "correct_answer": "By using the ErrorController interface",
      "incorrect_answers": [
        "By defining error-specific controller methods",
        "By configuring them in application.properties",
        "All of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which of the following annotations can be used to indicate that a method should be executed at application startup in Spring Boot?",
      "correct_answer": "@PostConstruct",
      "incorrect_answers": [
        "@InitMethod",
        "@Startup",
        "@Initialize"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of the @SpringBootTest annotation?",
      "correct_answer": "To start up the Spring application context for integration testing",
      "incorrect_answers": [
        "To indicate that a class is a Spring Boot test case",
        "To mock external dependencies in unit tests",
        "To configure test properties"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you schedule tasks in a Spring Boot application?",
      "correct_answer": "By using the @Scheduled annotation",
      "incorrect_answers": [
        "By creating custom cron jobs",
        "By configuring tasks in application.properties",
        "By using a separate task scheduler module"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which of the following is NOT a Spring Boot Actuator endpoint by default?",
      "correct_answer": "/trace",
      "incorrect_answers": [
        "/health",
        "/metrics",
        "/info"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you profile Spring Boot applications to run with different configurations?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "By using different application.properties files for each profile",
        "By annotating classes with @Profile",
        "By specifying profiles on the command line"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of the @Configuration annotation in Spring Boot?",
      "correct_answer": "To mark a class as a Spring configuration class",
      "incorrect_answers": [
        "To specify environment-specific configurations",
        "To enable component scanning",
        "To define beans"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you enable HTTP/2 support in a Spring Boot application?",
      "correct_answer": "By adding a dependency for an embedded server that supports HTTP/2",
      "incorrect_answers": [
        "By configuring it in application.properties",
        "By using a reverse proxy like Nginx",
        "All of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of Spring Boot's CommandLineRunner interface?",
      "correct_answer": "To execute tasks after the application context is fully initialized",
      "incorrect_answers": [
        "To execute tasks before the application context is fully initialized",
        "To define command-line arguments for the application",
        "None of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you override Spring Boot's default error handling?",
      "correct_answer": "By defining custom exception handlers",
      "incorrect_answers": [
        "By configuring error pages in web.xml",
        "By using the @ExceptionHandler annotation",
        "All of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of Spring Boot DevTools?",
      "correct_answer": "To improve developer productivity by providing tools for rapid development",
      "incorrect_answers": [
        "To automate deployment to production environments",
        "To monitor application performance in real-time",
        "To secure applications against common vulnerabilities"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you externalize configuration properties in a Spring Boot application?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "By using environment variables",
        "By specifying properties in application.properties",
        "By using YAML files"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which of the following annotations is used to indicate that a class should be considered a Spring bean?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "@Bean",
        "@Component",
        "@Service"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of Spring Boot Actuator's /health endpoint?",
      "correct_answer": "To provide information about the health of the application",
      "incorrect_answers": [
        "To list all available endpoints",
        "To monitor memory usage",
        "To expose metrics about the application"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you secure a Spring Boot application?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "By using Spring Security",
        "By configuring SSL",
        "By implementing OAuth2"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of the @EnableAutoConfiguration annotation in Spring Boot?",
      "correct_answer": "To enable auto-configuration of Spring Boot features",
      "incorrect_answers": [
        "To enable component scanning",
        "To specify environment-specific configurations",
        "None of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you customize the embedded Tomcat server in a Spring Boot application?",
      "correct_answer": "By extending the TomcatEmbeddedServletContainerFactory class",
      "incorrect_answers": [
        "By configuring it in application.properties",
        "By using a properties file named tomcat.properties",
        "By including a custom Tomcat jar in the classpath"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of the @SpringBootApplication annotation?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "To mark the main class of a Spring Boot application",
        "To enable Spring Boot auto-configuration",
        "To enable component scanning"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you access externalized configuration properties in a Spring Boot application?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "By using the @Value annotation",
        "By injecting Environment objects",
        "By using Spring's PropertySourcesPlaceholderConfigurer"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of Spring Boot's @EnableTransactionManagement annotation?",
      "correct_answer": "To enable Spring's transaction management capabilities",
      "incorrect_answers": [
        "To enable distributed transactions",
        "To configure transaction isolation levels",
        "None of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you create a custom banner for a Spring Boot application?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "By configuring it in application.properties",
        "By providing a banner.txt file in the classpath",
        "By using the SpringApplication.setBanner() method"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of Spring Boot's embedded database support?",
      "correct_answer": "To simplify database configuration",
      "incorrect_answers": [
        "To improve database performance",
        "To eliminate the need for an external database",
        "All of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which of the following annotations is used to define a transactional method in Spring Boot?",
      "correct_answer": "@Transactional",
      "incorrect_answers": [
        "@Transaction",
        "@TransactionMethod",
        "@TransactionalMethod"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you configure logging in a Spring Boot application?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "By using Log4j configuration files",
        "By configuring it in application.properties",
        "By using the @Slf4j annotation"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of the spring-boot-starter-test dependency?",
      "correct_answer": "To provide dependencies for testing Spring Boot applications",
      "incorrect_answers": [
        "To enable test profiles in Spring Boot applications",
        "To run integration tests automatically",
        "None of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you customize the default Spring Boot banner programmatically?",
      "correct_answer": "By implementing the Banner interface",
      "incorrect_answers": [
        "By extending the BannerPrinter class",
        "By using the SpringApplication.setBanner() method",
        "All of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of the @SpringBootTest annotation in integration testing?",
      "correct_answer": "To start up the Spring application context",
      "incorrect_answers": [
        "To indicate that a class is a Spring Boot test case",
        "To mock external dependencies",
        "All of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you enable Spring Boot Actuator's endpoints in a production environment?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "By including the spring-boot-actuator dependency",
        "By enabling them in application.properties",
        "By setting management.endpoints.enabled=true"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "What is the purpose of the @Slf4j annotation in Spring Boot?",
      "correct_answer": "To inject a logger instance",
      "incorrect_answers": [
        "To enable logging using the SLF4J framework",
        "To enable logging for a specific class",
        "None of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you package a Spring Boot application as a standalone executable JAR file?",
      "correct_answer": "By using the Maven spring-boot-maven-plugin",
      "incorrect_answers": [
        "By using the Maven assembly plugin",
        "By using the Maven shade plugin",
        "All of the above"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "Which of the following annotations is used to create a RESTful web service endpoint in Spring Boot?",
      "correct_answer": "All of the above",
      "incorrect_answers": [
        "@RestController",
        "@RequestMapping",
        "@ResponseBody"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Spring Boot",
      "question": "How can you customize the embedded servlet container in a Spring Boot application?",
      "correct_answer": "By extending the EmbeddedServletContainerCustomizer interface",
      "incorrect_answers": [
        "By configuring it in application.properties",
        "By using a properties file named servlet.properties",
        "By including a custom servlet jar in the classpath"
        ]
    }
  ]
  