# Use OpenJDK 17 slim image
FROM openjdk:17-jdk-slim

# Set working directory inside the container
WORKDIR /app

# Copy the built JAR from the target folder
COPY target/*.jar app.jar

# Set Spring Boot server port to 9090 to avoid conflict with Jenkins
ENV SERVER_PORT=9090

# Expose the new port
EXPOSE 9090

# Optional: health check (requires Spring Boot actuator)
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:9090/actuator/health || exit 1

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
