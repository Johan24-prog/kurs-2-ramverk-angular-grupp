## Dataflöde

### Borttagning av fil:

```
1. Användare klickar på ❌-knappen i "Min enhet"
   ↓
2. (click)="deleteItem(item.id)" triggas
   ↓
3. app.ts: deleteItem(id) hittar filen via ID
   ↓
4. Skapar kopia med deletedAt: Date.now()
   ↓
5. Lägger till i trashItems-array
   ↓
6. Tar bort från items-array
   ↓
7. Spara både items och trashItems i localStorage
   ↓
8. Angular change detection uppdaterar UI
   ↓
9. Filen försvinner från "Min enhet"
   ↓
10. Filen visas i "Papperskorg" med timestamp
```

### Återställning av fil:

```
1. Användare klickar på "Återställ" i papperskorgen
   ↓
2. (click)="restoreItem(i)" triggas
   ↓
3. app.ts: restoreItem(index) hämtar filen från trashItems
   ↓
4. Skapar ny kopia utan deletedAt
   ↓
5. Lägger till i items-array
   ↓
6. Tar bort från trashItems-array
   ↓
7. Spara både items och trashItems i localStorage
   ↓
8. Angular change detection uppdaterar UI
   ↓
9. Filen försvinner från "Papperskorg"
   ↓
10. Filen visas i "Min enhet" igen
```

### Permanent borttagning:

```
1. Användare klickar på "Ta bort permanent"
   ↓
2. (click)="permanentDeleteItem(i)" triggas
   ↓
3. app.ts: permanentDeleteItem(index) tar bort från trashItems
   ↓
4. Spara trashItems i localStorage
   ↓
5. Angular change detection uppdaterar UI
   ↓
6. Filen försvinner permanent från papperskorgen
```

---