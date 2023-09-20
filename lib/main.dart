import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Amazon Clone',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Amazon'),
        ),
        body: const Center(
          child: Text('Project started'),
        ),
      ),
    );
  }
}
