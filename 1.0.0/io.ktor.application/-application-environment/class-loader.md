---
title: ApplicationEnvironment.classLoader - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.application</a> / <a href="index.html">ApplicationEnvironment</a> / <a href="./class-loader.html">classLoader</a></div>

# classLoader

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">classLoader</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html"><span class="identifier">ClassLoader</span></a></code></div>

<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html">ClassLoader</a> used to load application.

Useful for various reflection-based services, like dependency injection.

