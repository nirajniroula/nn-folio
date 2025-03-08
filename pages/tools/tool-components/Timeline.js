import gsap from "gsap"; // For smooth animations
import { useEffect, useRef } from "react";
import { SlArrowUp } from "react-icons/sl";
import * as THREE from "three";
import { presidentList } from "../../../constants/presidents";

const Timeline = () => {
  const mountRef = useRef(null);
  const scrollToPresidentRef = useRef();
  useEffect(() => {
    // Three.js scene setup
    const finalHeight = window.innerHeight - 100;
    const finalWidth = window.innerWidth - 100;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      finalWidth / finalHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(finalWidth, finalHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Camera Position
    camera.position.z = 10; // Move the camera back
    camera.lookAt(scene.position); // Ensure the camera is looking at the scene

    // Starfield Animation
    const createStarfield = () => {
      const starCount = 3000; // Number of stars
      const stars = new Float32Array(starCount * 3); // Each star has x, y, z coordinates

      // Randomly position stars
      for (let i = 0; i < starCount; i++) {
        stars[i * 3] = (Math.random() - 0.5) * 2000; // x
        stars[i * 3 + 1] = (Math.random() - 0.5) * 2000; // y
        stars[i * 3 + 2] = (Math.random() - 0.5) * 2000; // z
      }

      const starGeometry = new THREE.BufferGeometry();
      starGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(stars, 3)
      );

      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff, // White stars
        size: 1, // Size of each star
        transparent: true,
        opacity: 0.5,
      });

      const starfield = new THREE.Points(starGeometry, starMaterial);
      scene.add(starfield);

      // Animate stars (twinkling effect)
      const animateStars = () => {
        const positions = starGeometry.attributes.position.array;
        for (let i = 0; i < starCount; i++) {
          const z = positions[i * 3 + 2];
          positions[i * 3 + 2] = z > 1000 ? z - 2000 : z + 0.1; // Move stars along the z-axis
        }
        starGeometry.attributes.position.needsUpdate = true;
      };

      return animateStars;
    };

    const animateStars = createStarfield();

    // President Data
    const presidents = [...presidentList]; // Create a copy of the array
    presidents.reverse();

    const scrollToPresident = (index) => {
      if (index < 0 || index >= presidentMeshes.length) return; // Validate index

      // Update currentIndex to the target president
      currentIndex = index;

      // Smoothly animate the camera to focus on the target president
      gsap.to(camera.position, {
        y: -currentIndex * 6, // Match the Y position of the target president
        duration: 1.5, // Animation duration
        ease: "power2.out", // Smooth easing function
      });

      // Update textures and effects for the target president
      updateTextures(currentIndex, presidentMeshes, presidents);

      // Update info overlay
      const infoOverlay = document.getElementById("info-overlay");
      const presidentName = document.getElementById("president-name");
      const presidentTerm = document.getElementById("president-term");
      if (infoOverlay && presidentName && presidentTerm) {
        presidentName.textContent = presidents[currentIndex].name;
        presidentTerm.textContent = `Term: ${presidents[currentIndex].term}`;

        // Animate info overlay appearance
        gsap.fromTo(
          infoOverlay,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }
        );
      }

      // Scale up the focused president and blur others
      presidentMeshes.forEach((mesh, i) => {
        if (i === currentIndex) {
          // Scale up focused president
          gsap.to(mesh.scale, {
            x: 2.5,
            y: 2.1,
            z: 2,
            duration: 0.8,
            delay: 0.5,
          });

          // Remove blur effect
          mesh.material = new THREE.MeshBasicMaterial({
            map: mesh.material.map,
          });
        } else {
          // Scale down non-focused presidents
          gsap.to(mesh.scale, {
            x: 0.2,
            y: 0.2,
            z: 0.2,
            duration: 0.5,
          });

          // Add blur effect
          mesh.material = new THREE.MeshBasicMaterial({
            map: mesh.material.map,
            transparent: true,
            opacity: 0.5,
          });
        }
      });
    };
    scrollToPresidentRef.current = scrollToPresident;

    // Load Textures and Create Meshes
    const textureLoader = new THREE.TextureLoader();
    const presidentMeshes = [];

    // Function to dispose of a texture
    const disposeTexture = (mesh) => {
      if (mesh.material.map) {
        mesh.material.map.dispose(); // Dispose of the texture
        mesh.material.map = null; // Remove the texture reference
      }
      mesh.material.dispose(); // Dispose of the material
    };

    // Function to load a texture
    const loadTexture = (url) => {
      return new Promise((resolve) => {
        textureLoader.load(
          url,
          (texture) => resolve(texture),
          undefined,
          (error) => {
            console.error("Error loading texture:", error);
            resolve(null);
          }
        );
      });
    };

    // Function to update textures based on visibility
    const updateTextures = (currentIndex, presidentMeshes, presidents) => {
      const visibleRange = 4; // Number of presidents to keep loaded on either side of the focused president

      presidentMeshes.forEach((mesh, index) => {
        if (Math.abs(index - currentIndex) <= visibleRange) {
          // Load texture if it's within the visible range
          if (!mesh.material.map) {
            loadTexture(presidents[index].image).then((texture) => {
              if (texture) {
                texture.colorSpace = THREE.SRGBColorSpace; // Preserve original colors
                mesh.material.map = texture;
                mesh.material.needsUpdate = true; // Update the material
              }
            });
          }
        } else {
          // Unload texture if it's outside the visible range
          if (mesh.material.map) {
            disposeTexture(mesh);
          }
        }
      });
    };

    // Create meshes without loading textures initially
    presidents.forEach((president, index) => {
      const material = new THREE.MeshBasicMaterial();
      const geometry = new THREE.PlaneGeometry(2, 3);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = -index * 6; // Position meshes vertically (adjust spacing as needed)
      scene.add(mesh);
      presidentMeshes.push(mesh);
      // Set the first president as focused by default
      if (index === 0) {
        mesh.scale.set(2.5, 2.1, 2); // Scale up the first president
      } else {
        mesh.scale.set(0.2, 0.2, 0.2); // Scale down non-focused presidents
        mesh.material = new THREE.MeshBasicMaterial({
          map: mesh.material.map,
          transparent: true,
          opacity: 0.3, // Add blur effect
        });
      }
    });

    // Load texture for the first president immediately
    updateTextures(0, presidentMeshes, presidents);

    // Update info overlay immediately for the first president
    const infoOverlay = document.getElementById("info-overlay");
    const presidentName = document.getElementById("president-name");
    const presidentTerm = document.getElementById("president-term");
    if (infoOverlay && presidentName && presidentTerm) {
      // Update content
      presidentName.textContent = presidents[0].name;
      presidentTerm.textContent = `Term: ${presidents[0].term}`;

      // Animate info overlay appearance
      gsap.fromTo(
        infoOverlay,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }
      );
    }

    // Scroll Animation
    let currentIndex = 0;
    let isScrolling = false; // To prevent rapid scrolling

    const onScroll = (event) => {
      if (isScrolling) return; // Prevent multiple scrolls at once

      const delta = Math.sign(event.deltaY) * 0.5; // Reduce scroll sensitivity by multiplying by 0.5

      if (delta > 0 && currentIndex < presidents.length - 1) {
        currentIndex++;
      } else if (delta < 0 && currentIndex > 0) {
        currentIndex--;
      }
      isScrolling = true;

      // Smoothly animate the camera to focus on the current president
      gsap.to(camera.position, {
        y: -currentIndex * 6, // Match the Y position of the current president
        duration: 1.2, // Animation duration in seconds
        ease: "power2.out", // Smooth easing function
        onComplete: () => {
          isScrolling = false; // Allow scrolling again after animation completes
        },
      });

      // Update textures based on visibility
      updateTextures(currentIndex, presidentMeshes, presidents);

      // Update info overlay
      const infoOverlay = document.getElementById("info-overlay");
      const presidentName = document.getElementById("president-name");
      const presidentTerm = document.getElementById("president-term");
      if (infoOverlay && presidentName && presidentTerm) {
        // Update content
        presidentName.textContent = presidents[currentIndex].name;
        presidentTerm.textContent = `Term: ${presidents[currentIndex].term}`;

        // Animate info overlay appearance
        gsap.fromTo(
          infoOverlay,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }
        );
      }

      // Inside the onScroll function, update the scaling and frame logic
      // Inside the onScroll function, update the scaling and material logic
      presidentMeshes.forEach((mesh, index) => {
        if (index === currentIndex) {
          // Scale up focused president
          gsap.to(mesh.scale, {
            x: 2.5, // Increased scale for focused image
            y: 2.1,
            z: 2,
            duration: 0.8,
            delay: 0.5, // Slight delay for smooth scaling
          });

          // Load texture with correct color space and apply it
          textureLoader.load(presidents[index].image, (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace; // Preserve original colors
            mesh.material = new THREE.MeshBasicMaterial({
              map: texture,
              transparent: false, // Disable transparency
              opacity: 1, // Ensure full opacity
            });
            mesh.material.needsUpdate = true;
          });
        } else {
          // Scale down non-focused presidents
          gsap.to(mesh.scale, {
            x: 0.2,
            y: 0.2,
            z: 0.2,
            duration: 0.5,
          });

          // Add blur effect to non-focused presidents
          mesh.material = new THREE.MeshBasicMaterial({
            map: mesh.material.map,
            transparent: true,
            opacity: 0.5, // Adjust opacity for blur effect
          });

          // Hide the frame for non-focused presidents
          if (mesh.frame) {
            mesh.frame.visible = false;
          }
        }
      });
    };

    // Handle wheel events (for desktop)
    const handleWheel = (event) => {
      if (isScrolling) return;
      const delta = Math.sign(event.deltaY) * 0.5;
      onScroll({ deltaY: delta });
    };

    // Handle touch events (for mobile)
    let touchStartY = 0;
    const handleTouchStart = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      if (isScrolling) return;
      const touchEndY = event.touches[0].clientY;
      const delta = touchStartY - touchEndY;
      onScroll({ deltaY: delta * 0.1 });
    };
    // Add event listeners
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    // Render Loop
    const animate = () => {
      requestAnimationFrame(animate);
      animateStars(); // Animate the starfield
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      mountRef?.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div ref={mountRef} />
      <div
        id="info-overlay"
        style={{
          position: "absolute",
          top: "120px",
          left: "27px",
          color: "white",
          opacity: 0, // Initially hidden
          background: "#2a303c",
          padding: 8,
          borderWidth: 1,
          borderColor: "grey",
        }}
      >
        <h2 id="president-name"></h2>
        <p id="president-term"></p>
      </div>
      <button
        onClick={() => scrollToPresidentRef.current(0)}
        className="btn-secondary btn-md btn-circle btn"
        style={{
          position: "fixed",
          bottom: "80px",
          right: "80px",
          zIndex: 1000,
        }}
      >
        <SlArrowUp className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Timeline;
